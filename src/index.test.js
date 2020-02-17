import useTimeout from "./";
import { renderHook, act } from "@testing-library/react-hooks";

// mock timer using jest
jest.useFakeTimers();

describe("useTimout", () => {
  it("updates after provided timeout", () => {
    const { result } = renderHook(() => useTimeout(100));

    expect(result.current[0]).toBe(false);

    // Fast-forward 1sec
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    // Check after total 1 sec
    expect(result.current[0]).toBe(true);
  });

  it("cleans up after itself", () => {
    const clearTimeoutPtr = clearTimeout;
    clearTimeout = jest.fn();
    const { result, unmount } = renderHook(() => useTimeout(1000));
    unmount();
    expect(clearTimeout).toHaveBeenCalled();
  });
});
