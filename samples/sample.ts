// Sample TypeScript for theme testing

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  metadata?: Record<string, unknown>;
}

type AsyncResult<T> = Promise<{ data: T; error: null } | { data: null; error: Error }>;

enum Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
}

const DEFAULT_TIMEOUT = 5000;

abstract class Repository<T extends { id: string }> {
  protected items: Map<string, T> = new Map();

  abstract validate(item: T): boolean;

  async findById(id: string): AsyncResult<T> {
    try {
      const item = this.items.get(id);
      if (!item) {
        throw new Error(`Item ${id} not found`);
      }
      return { data: item, error: null };
    } catch (error) {
      return { data: null, error: error as Error };
    }
  }

  save(item: T): void {
    if (!this.validate(item)) {
      throw new TypeError(`Invalid item: ${JSON.stringify(item)}`);
    }
    this.items.set(item.id, item);
  }
}

class UserRepository extends Repository<User> {
  validate(user: User): boolean {
    return user.id.length > 0 && user.email.includes('@');
  }

  findByRole(role: User['role']): User[] {
    return [...this.items.values()].filter((u) => u.role === role);
  }
}

// Generic utility
function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number = DEFAULT_TIMEOUT,
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Decorators
function log(_target: unknown, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: unknown[]) {
    console.log(`[${key}] called with`, args);
    return original.apply(this, args);
  };
}

export { User, Status, UserRepository, debounce };
