import "@testing-library/jest-dom";
import { vi } from "vitest";

// глушим window.alert —- не засоряет вывод
vi.spyOn(window, "alert").mockImplementation(() => {});
