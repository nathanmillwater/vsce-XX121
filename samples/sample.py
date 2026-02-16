# Sample Python for theme testing

from __future__ import annotations

import asyncio
from dataclasses import dataclass, field
from enum import Enum
from typing import Any, Optional

API_BASE = "https://api.example.com"
MAX_CONNECTIONS = 100


class Priority(Enum):
    """Task priority levels."""
    LOW = 1
    MEDIUM = 2
    HIGH = 3
    CRITICAL = 4


@dataclass
class Task:
    """Represents an async task with metadata."""
    id: str
    title: str
    priority: Priority = Priority.MEDIUM
    tags: list[str] = field(default_factory=list)
    metadata: dict[str, Any] = field(default_factory=dict)
    _completed: bool = field(default=False, repr=False)

    @property
    def is_completed(self) -> bool:
        return self._completed

    def complete(self) -> None:
        """Mark the task as completed."""
        self._completed = True
        self.metadata["completed_at"] = "now"


class TaskManager:
    """Manages a collection of tasks."""

    def __init__(self, max_tasks: int = 1000) -> None:
        self._tasks: dict[str, Task] = {}
        self._max = max_tasks

    def add(self, task: Task) -> None:
        if len(self._tasks) >= self._max:
            raise RuntimeError(f"Cannot exceed {self._max} tasks")
        self._tasks[task.id] = task

    def find(self, *, priority: Optional[Priority] = None) -> list[Task]:
        """Find tasks, optionally filtered by priority."""
        tasks = list(self._tasks.values())
        if priority is not None:
            tasks = [t for t in tasks if t.priority == priority]
        return sorted(tasks, key=lambda t: t.priority.value, reverse=True)

    async def process_all(self) -> int:
        """Process all pending tasks concurrently."""
        pending = [t for t in self._tasks.values() if not t.is_completed]

        async def _process(task: Task) -> None:
            await asyncio.sleep(0.01)  # simulate work
            task.complete()

        await asyncio.gather(*[_process(t) for t in pending])
        return len(pending)


# F-strings, walrus operator, comprehension
def summarize(manager: TaskManager) -> str:
    if (count := len(manager._tasks)) == 0:
        return "No tasks"

    by_priority = {
        p.name: len([t for t in manager._tasks.values() if t.priority == p])
        for p in Priority
    }
    return f"Total: {count} | " + " | ".join(
        f"{k}: {v}" for k, v in by_priority.items() if v > 0
    )


REGEX_PATTERN = r"^[a-zA-Z_]\w*$"

if __name__ == "__main__":
    mgr = TaskManager()
    mgr.add(Task("1", "Write tests", Priority.HIGH, tags=["dev"]))
    mgr.add(Task("2", "Deploy", Priority.CRITICAL))
    print(summarize(mgr))
    asyncio.run(mgr.process_all())
