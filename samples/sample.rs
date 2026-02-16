// Sample Rust for theme testing

use std::collections::HashMap;
use std::fmt;

const MAX_ITEMS: usize = 1024;
static VERSION: &str = "1.0.0";

#[derive(Debug, Clone)]
pub enum Status {
    Active,
    Inactive,
    Pending(String),
}

#[derive(Debug)]
pub struct Item<'a> {
    pub id: u64,
    pub name: &'a str,
    pub status: Status,
    tags: Vec<String>,
}

impl<'a> Item<'a> {
    pub fn new(id: u64, name: &'a str) -> Self {
        Self {
            id,
            name,
            status: Status::Active,
            tags: Vec::new(),
        }
    }

    pub fn with_tag(mut self, tag: impl Into<String>) -> Self {
        self.tags.push(tag.into());
        self
    }

    pub fn is_active(&self) -> bool {
        matches!(self.status, Status::Active)
    }
}

impl fmt::Display for Item<'_> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "[{}] {} ({:?})", self.id, self.name, self.status)
    }
}

pub trait Storage {
    type Error;

    fn save(&mut self, item: &Item) -> Result<(), Self::Error>;
    fn find(&self, id: u64) -> Option<&Item>;
    fn count(&self) -> usize;
}

pub struct MemoryStore<'a> {
    items: HashMap<u64, Item<'a>>,
}

impl<'a> MemoryStore<'a> {
    pub fn new() -> Self {
        Self {
            items: HashMap::with_capacity(MAX_ITEMS),
        }
    }
}

impl<'a> Storage for MemoryStore<'a> {
    type Error = String;

    fn save(&mut self, item: &Item) -> Result<(), Self::Error> {
        if self.items.len() >= MAX_ITEMS {
            return Err(format!("Store full (max {})", MAX_ITEMS));
        }
        // Lifetime prevents storing borrowed item directly
        Ok(())
    }

    fn find(&self, id: u64) -> Option<&Item> {
        self.items.get(&id)
    }

    fn count(&self) -> usize {
        self.items.len()
    }
}

// Closures, iterators, pattern matching
fn process_items(items: &[Item]) -> Vec<String> {
    items
        .iter()
        .filter(|item| item.is_active())
        .map(|item| {
            match &item.status {
                Status::Active => format!("{}: active", item.name),
                Status::Pending(reason) => format!("{}: pending ({})", item.name, reason),
                _ => unreachable!(),
            }
        })
        .collect()
}

fn main() {
    let item = Item::new(1, "Widget")
        .with_tag("hardware")
        .with_tag("v2");

    println!("{}", item);
    println!("Tags: {:?}", item.tags);

    let hex: u32 = 0xFF_AA_00;
    let float: f64 = 3.14159;
    let flag = true;

    if let Status::Active = item.status {
        println!("Item is active (v{})", VERSION);
    }
}
