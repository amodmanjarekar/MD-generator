import { useEffect, useState } from "react";
import Dropdown, { DropdownOption } from "../../ui/dropdown";
import { authOptions, frameworkOptions, localizationOptions, serverStateOptions, testingOptions } from "./options";
import { useGeneratorStore } from "@/app/config";

export default function Stack() {
  const base = useGeneratorStore(s => s);
  const meta = base.meta;
  const stack = base.stack;
  const updateStack = useGeneratorStore(s => s.updateStack);
  const updateMeta = useGeneratorStore(s => s.updateMeta);

  function findSelected(options: DropdownOption[], value: string) {
    return options.find(
      o => o.value === value
    ) ?? options[0];
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-4xl">
        {/* METADATA */}
        <div className="flex flex-col bg-taupe-800 rounded-md p-2 mb-4">
          <label className="text-sm mb-1" htmlFor="projectName">
            Project Name
          </label>
          <input
            type="text"
            name="projectName"
            id="projectName"
            className="py-1 px-2 rounded-md outline outline-blue-400"
            defaultValue={meta.projectName}
            placeholder="Enter project name"
            onChange={e => updateMeta({ projectName: e.currentTarget.value })}
          />
        </div>
        <div className="flex flex-col bg-taupe-800 rounded-md p-2 mb-4">
          <label className="text-sm mb-1" htmlFor="desc">
            Description
          </label>
          <textarea
            name="desc"
            id="desc"
            className="py-1 px-2 rounded-md outline outline-blue-400"
            defaultValue={meta.description}
            placeholder="Enter description"
            onChange={e => updateMeta({ description: e.currentTarget.value })}
          />
        </div>
        {/* STACK */}
        <form className="grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">
          <div className="flex flex-col bg-taupe-800 rounded-md p-2">
            <label className="text-sm mb-1" htmlFor="framework">
              Framework
            </label>
            <Dropdown
              name="framework"
              options={frameworkOptions}
              selected={findSelected(frameworkOptions, stack.framework)}
              setSelected={(option) => updateStack({framework: option.value})}
              description="Select your preferred framework"
            />
          </div>
          <div className="flex flex-col bg-taupe-800 rounded-md p-2">
            <label className="text-sm mb-1" htmlFor="serverState">
              Server State
            </label>
            <Dropdown
              name="serverState"
              options={serverStateOptions}
              selected={findSelected(serverStateOptions, stack.serverState)}
              setSelected={(option) => updateStack({serverState: option.value})}
              description="State management"
            />
          </div>
          <div className="flex flex-col bg-taupe-800 rounded-md p-2">
            <label className="text-sm mb-1" htmlFor="localization">
              Localization
            </label>
            <Dropdown
              name="localization"
              options={localizationOptions}
              selected={findSelected(localizationOptions, stack.localization)}
              setSelected={(option) => updateStack({localization: option.value})}
              description="Localization and translations"
            />
          </div>
          <div className="flex flex-col bg-taupe-800 rounded-md p-2">
            <label className="text-sm mb-1" htmlFor="auth">
              Authentication
            </label>
            <Dropdown
              name="auth"
              options={authOptions}
              selected={findSelected(authOptions, stack.auth)}
              setSelected={(option) => updateStack({auth: option.value})}
              description="Authentication"
            />
          </div>
          <div className="flex flex-col bg-taupe-800 rounded-md p-2">
            <label className="text-sm mb-1" htmlFor="testing">
              Testing
            </label>
            <Dropdown
              name="testing"
              options={testingOptions}
              selected={findSelected(testingOptions, stack.testing)}
              setSelected={(option) => updateStack({testing: option.value})}
              description="Testing libraries"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
