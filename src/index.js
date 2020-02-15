/*
React.js HOOK

useTransitionTimeout ( NUMBER milliseconds, ANY trigger )
  Get a boolean value after an arbitrary timeout. Useful for rendering mounting components.

RETURNS  [ BOOL done, FUNC init, FUNC unload ] ARRAY

PARAMS
  - milliseconds: time in milliseconds before isDone is set to true;
  - trigger: When this argument changes, we clear the timeout.
*/

import { useState, useEffect } from "react";


export default function useTransitionTimeout(milliseconds, trigger = false) {

  // Track timeout done state
  const [done, setDone] = useState(false);

  // Track the timeout pointer used in in case we need to unmount before timeout is complete
  const [arbitraryTimeout, setArbitraryTimeout] = useState();

  // useEffect(() => {
  //   init();
  // }, []);

  // Do this on load;
  // Observe the optional trigger to reset done state
  useEffect(() => {
    unload();
    init();
    return () => unload();
  }, [trigger]);

  // Provide method for unmounting
  function unload() { setArbitraryTimeout(clearTimeout(arbitraryTimeout)); }

  // The init method used by mounting components
  function init() {
    // Reset the done status
    setDone(false);

    // Run a timeout in passed milliseconds
    // Track the timeout with doneTimeout state
    setArbitraryTimeout(setTimeout(() => {

      // Let the component know we are done.
      setDone(true);

      // Clean up
      unload();
    }, milliseconds));
  }

  return [done, init, unload];
}
