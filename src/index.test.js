import useTimeout from "./";
import { renderHook, act } from "@testing-library/react-hooks";

// mock timer using jest
jest.useFakeTimers();

describe("useMyHook", () => {
  it("updates after provided timeout", () => {
    const { result, ...stuff } = renderHook(() => useTimeout(100));

    console.log("stuff", stuff);

    expect(result.current[0]).toBe(false);

    // Fast-forward 1sec
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    // Check after total 1 sec
    expect(result.current[0]).toBe(true);
  });
});
