import { useState } from "react";
import Dropdown, { DropdownOption } from "../../ui/dropdown";
import { authOptions, frameworkOptions, localizationOptions, serverStateOptions, testingOptions } from "./options";

export default function Stack() {
  const [form, setForm] = useState({
    framework: frameworkOptions[0],
    serverState: serverStateOptions[0],
    localization: localizationOptions[0],
    auth: authOptions[0],
    testing: testingOptions[0],
  });

  return (
    <form className="grid grid-cols-4 gap-4">
      <div className="flex flex-col bg-taupe-800 rounded-md p-2">
        <label className="text-sm mb-1" htmlFor="framework">
          Framework
        </label>
        <Dropdown
          name="framework"
          options={frameworkOptions}
          selected={form.framework}
          setSelected={(value) =>
            setForm((f) => ({
              ...f,
              framework: value,
            }))
          }
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
          selected={form.serverState}
          setSelected={(value) =>
            setForm((f) => ({
              ...f,
              serverState: value,
            }))
          }
          description="State management"
        />
      </div>

      <div className="flex flex-col bg-taupe-800 rounded-md p-2">
        <label className="text-sm mb-1" htmlFor="localization">
          Localization
        </label>
        <Dropdown
          name="localization"
          options={serverStateOptions}
          selected={form.localization}
          setSelected={(value) =>
            setForm((f) => ({
              ...f,
              localization: value,
            }))
          }
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
          selected={form.auth}
          setSelected={(value) =>
            setForm((f) => ({
              ...f,
              auth: value,
            }))
          }
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
          selected={form.testing}
          setSelected={(value) =>
            setForm((f) => ({
              ...f,
              testing: value,
            }))
          }
          description="Testing libraries"
        />
      </div>
    </form>
  );
}
