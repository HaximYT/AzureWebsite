import Function from "./components/Function";

function Functions() {
  return (
    <section id="functions">
      <div className="flex flex-flow-col auto-cols-auto flex-wrap justify pb-9">
        <div className="w-11/12 items-center justify-center mx-auto">
          <h1 className="text-3xl font-semibold pb-10 text-center">Documentation</h1>

          <Function code="<bool> isluau(<void>)" description="Returns true if the game is running LuaU" />
          <Function code="<string> getnamecallmethod(<void>)" description="Returns the namecall method if the function is called in an __namecall metatable hook" />
          <Function code="<table> getgenv(<void>)" description="Returns the global environment in a table" />
          <Function code="<table> getrenv(<void>)" description="Returns Roblox's environment in a table" />
          <Function code="<table> getreg(<void>)" description="Returns Roblox's lua registry in a table" />
          <Function code="<table> getgc(<void>)" description="Returns Roblox's gc functions/table in a table" />
          <Function code="<table> getsenv(<LocalScript, ModuleScript> Script)" description="Returns the environment of Script and returns nil if the script is not running" />
          <Function code="<table> getrawmetatable(<table> value)" description="Retrieve the metatable of value regardless of value's metatable's __metatable field. Returns nil if it doesn't exist" />
          <Function code="<bool> setrawmetatable(<object> o, <table> mt)" description="Sets o's metatable to mt even if the __metatable field exists in o's metatable" />
          <Function code="<table> getflags(<void>)" description="Returns loaded fflags in a table" />
          <Function code="<string> getclipboard(<void>)" description="Returns whatever is copied on the clipboard as a string" />
          <Function code="<string> setclipboard( ... )" description="Sets clipboard data to all given arguments" />
          <Function code="<bool> isreadonly(<table> table)" description="Return's table's readonly value" />
          <Function code="<void> setreadonly(<table> table, <bool> val)" description="Sets table's read-only value to val" />
          <Function code="<bool> checkcaller(<void>)" description="Return true if the current thread was not called from game script" />

          <h1 className="text-3xl font-semibold pt-5 pb-10 text-center">Keyboard/Mouse Library</h1>
          <Function code="<void> keypress(<number> keycode)" description="Simulates a key press for the specified keycode" />
          <Function code="<void> keyrelease(<number> key)" description="Releases key on the keyboard" />
          <Function code="<void> mouse1click(<void>)" description="Simulates a left mouse button click" />
          <Function code="<void> mouse1press(<void>)" description="Simulates a left mouse button press without releasing it" />
          <Function code="<void> mouse1release(<void>)" description="Simulates a left mouse button release" />
          <Function code="<void> mouse2click(<void>)" description="Simulates a full right mouse button click" />
          <Function code="<void> mouse2press(<void>)" description="Clicks down on the right mouse button" />
          <Function code="<void> mouse2release(<void>)" description="Simulates a right mouse button release" />
          <Function code="<void> mousescroll(<number> px)" description="Scrolls the mouse wheel virtually by px pixels" />
          <Function code="<void> mousemoverel(<number> x, <number> y)" description="Moves the mouse cursor relatively to the current mouse position by coordinates x and y" />
          <Function code="<void> mousemoveabs(<number> x, <number> y)" description="Moves the mouse to the x and y coordinates in pixels from the top left of the window" />
        </div>
      </div>
    </section>
  );
}

export default Functions;
