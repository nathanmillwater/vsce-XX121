// Sample JavaScript for theme testing

import { readFile } from 'node:fs/promises';

const API_URL = 'https://api.example.com';
const MAX_RETRIES = 3;

/**
 * Fetches user data from the API.
 * @param {string} userId - The user's unique identifier
 * @returns {Promise<User>} The user object
 */
async function fetchUser(userId) {
  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    try {
      const response = await fetch(`${API_URL}/users/${userId}`);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      return {
        id: data.id,
        name: data.name ?? 'Anonymous',
        isActive: true,
        tags: [...data.tags, 'fetched'],
        createdAt: new Date(data.created_at),
      };
    } catch (error) {
      console.warn(`Attempt ${attempt + 1} failed:`, error.message);
      if (attempt === MAX_RETRIES - 1) throw error;
    }
  }
}

class UserCache extends Map {
  #ttl;

  constructor(ttlMs = 60_000) {
    super();
    this.#ttl = ttlMs;
  }

  set(key, value) {
    const entry = { value, expires: Date.now() + this.#ttl };
    return super.set(key, entry);
  }

  get(key) {
    const entry = super.get(key);
    if (!entry) return undefined;
    if (Date.now() > entry.expires) {
      this.delete(key);
      return undefined;
    }
    return entry.value;
  }
}

// Template literal with expression
const greeting = (name) => `Hello, ${name}!`;

// Regex
const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Destructuring & spread
const { id, name, ...rest } = await fetchUser('abc-123');

export { fetchUser, UserCache, EMAIL_RE };
