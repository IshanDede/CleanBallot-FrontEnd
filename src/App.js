import "./App.css";
import io, { Socket } from "socket.io-client"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Suspense, useEffect, useRef, useState } from "react";

import { router } from "./routes/router";
import GlobalContextProvider from "./contexts";



function App() {
  const socket = useRef(null);

  const context_to_all_site = {
    socket,
    temp: "holy shit"
  }
  useEffect(() => {
    if (!socket.current) {
      socket.current = io(process.env.REACT_APP_SOCKET_URL, {
        transports: ["websocket"],
        reconnection: true,
        reconnectionAttempts: "Infinity",
        reconnectionDelay: 1000,
      });
    }
  }, [])
  return (
    <>
      <GlobalContextProvider context={context_to_all_site}>
        <Suspense fallback={(<div className="grid min-h-50v place-items-center"><div className="w-full h-full border-4 border-dashed rounded-full border-sky-700 animate-spin"/></div>)}>
          <RouterProvider router={router} />
        </Suspense>
      </GlobalContextProvider>
    </>
  );
}

export default App;
