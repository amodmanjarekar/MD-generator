import {
  ButtonStyle,
  CardStyle,
  FeedbackStyle,
  InputStyle,
  NavigationStyle,
  useGeneratorStore,
} from "@/app/config";
import { Plus, Trash2, X } from "lucide-react";
import React from "react";

const ComponentStyles = () => {
  const buttonStyles = useGeneratorStore((s) => s.design.buttonStyles);
  const inputStyles = useGeneratorStore((s) => s.design.inputStyles);
  const cardStyles = useGeneratorStore((s) => s.design.cardStyles);
  const navigationStyles = useGeneratorStore((s) => s.design.navigationStyles);
  const feedbackStyles = useGeneratorStore((s) => s.design.feedbackStyles);
  const updateDesign = useGeneratorStore((s) => s.updateDesign);
  const updateButtonStyles = (
    updater: (buttons: ButtonStyle[]) => ButtonStyle[],
  ) => {
    updateDesign({
      buttonStyles: updater(buttonStyles),
    });
  };

  const addButton = () => {
    updateButtonStyles((prev) => [
      ...prev,
      {
        type: "",
        color: "",
        states: [],
      },
    ]);
  };

  const deleteButton = (buttonIndex: number) => {
    if (buttonStyles.length === 1) return;

    updateButtonStyles((prev) => prev.filter((_, i) => i !== buttonIndex));
  };

  const addState = (buttonIndex: number) => {
    updateButtonStyles((prev) =>
      prev.map((button, i) =>
        i === buttonIndex
          ? {
              ...button,
              states: [...button.states, ""],
            }
          : button,
      ),
    );
  };

  const deleteState = (buttonIndex: number, stateIndex: number) => {
    updateButtonStyles((prev) =>
      prev.map((button, i) =>
        i === buttonIndex
          ? {
              ...button,
              states: button.states.filter((_, j) => j !== stateIndex),
            }
          : button,
      ),
    );
  };

  const updateInputStyles = (
    updater: (inputs: InputStyle[]) => InputStyle[],
  ) => {
    updateDesign({
      inputStyles: updater(inputStyles),
    });
  };

  const addInputState = () => {
    updateInputStyles((prev) => [
      ...prev,
      {
        states: [""],
      },
    ]);
  };

  const addInputStateItem = (inputIndex: number) => {
    updateInputStyles((prev) =>
      prev.map((input, i) =>
        i === inputIndex
          ? {
              ...input,
              states: [...input.states, ""],
            }
          : input,
      ),
    );
  };

  const deleteInputState = (inputIndex: number, stateIndex: number) => {
    updateInputStyles((prev) =>
      prev.map((input, i) =>
        i === inputIndex
          ? {
              ...input,
              states: input.states.filter((_, j) => j !== stateIndex),
            }
          : input,
      ),
    );
  };

  const deleteInput = (inputIndex: number) => {
    if (inputStyles.length === 1) return;

    updateInputStyles((prev) => prev.filter((_, i) => i !== inputIndex));
  };

  const updateCardStyles = (updater: (cards: CardStyle[]) => CardStyle[]) => {
    updateDesign({
      cardStyles: updater(cardStyles),
    });
  };

  const addCard = () => {
    updateCardStyles((prev) => [
      ...prev,
      {
        features: [""],
      },
    ]);
  };

  const deleteCard = (cardIndex: number) => {
    if (cardStyles.length === 1) return;

    updateCardStyles((prev) => prev.filter((_, i) => i !== cardIndex));
  };

  const addCardFeature = (cardIndex: number) => {
    updateCardStyles((prev) =>
      prev.map((card, i) =>
        i === cardIndex
          ? {
              ...card,
              features: [...card.features, ""],
            }
          : card,
      ),
    );
  };

  const deleteCardFeature = (cardIndex: number, featureIndex: number) => {
    updateCardStyles((prev) =>
      prev.map((card, i) =>
        i === cardIndex
          ? {
              ...card,
              features: card.features.filter((_, j) => j !== featureIndex),
            }
          : card,
      ),
    );
  };

  const updateNavigationStyles = (
    updater: (navigation: NavigationStyle[]) => NavigationStyle[],
  ) => {
    updateDesign({
      navigationStyles: updater(navigationStyles),
    });
  };

  const addNavigation = () => {
    updateNavigationStyles((prev) => [
      ...prev,
      {
        features: [""],
      },
    ]);
  };

  const deleteNavigation = (navigationIndex: number) => {
    if (navigationStyles.length === 1) return;

    updateNavigationStyles((prev) =>
      prev.filter((_, i) => i !== navigationIndex),
    );
  };

  const addNavigationFeature = (navigationIndex: number) => {
    updateNavigationStyles((prev) =>
      prev.map((navigation, i) =>
        i === navigationIndex
          ? {
              ...navigation,
              features: [...navigation.features, ""],
            }
          : navigation,
      ),
    );
  };

  const deleteNavigationFeature = (
    navigationIndex: number,
    featureIndex: number,
  ) => {
    updateNavigationStyles((prev) =>
      prev.map((navigation, i) =>
        i === navigationIndex
          ? {
              ...navigation,
              features: navigation.features.filter(
                (_, j) => j !== featureIndex,
              ),
            }
          : navigation,
      ),
    );
  };

  const updateFeedbackStyles = (
    updater: (feedback: FeedbackStyle[]) => FeedbackStyle[],
  ) => {
    updateDesign({
      feedbackStyles: updater(feedbackStyles),
    });
  };

  const addFeedback = () => {
    updateFeedbackStyles((prev) => [
      ...prev,
      {
        types: [""],
      },
    ]);
  };

  const deleteFeedback = (feedbackIndex: number) => {
    if (feedbackStyles.length === 1) return;

    updateFeedbackStyles((prev) => prev.filter((_, i) => i !== feedbackIndex));
  };

  const addFeedbackType = (feedbackIndex: number) => {
    updateFeedbackStyles((prev) =>
      prev.map((feedback, i) =>
        i === feedbackIndex
          ? {
              ...feedback,
              types: [...feedback.types, ""],
            }
          : feedback,
      ),
    );
  };

  const deleteFeedbackType = (feedbackIndex: number, typeIndex: number) => {
    updateFeedbackStyles((prev) =>
      prev.map((feedback, i) =>
        i === feedbackIndex
          ? {
              ...feedback,
              types: feedback.types.filter((_, j) => j !== typeIndex),
            }
          : feedback,
      ),
    );
  };

  return (
    <div className="w-full max-w-4xl">
      <label className="mb-2 block text-lg font-medium">
        Component Stylings
      </label>

    <div className="rounded-lg border border-gray-700 p-4">
           <div className="rounded-lg border border-gray-700 p-4">
        <label className="font-medium">Buttons</label>

        {buttonStyles.map((button, index) => (
          <div key={index} className="mb-6 border-b pb-6 last:border-b-0">
            <div className="mb-4 flex justify-end">
              {buttonStyles.length > 1 && (
                <button
                  type="button"
                  onClick={() => deleteButton(index)}
                  className="text-gray-500 hover:text-red-500"
                >
                  <X />
                </button>
              )}
            </div>

            {/* Button Type */}
            <div className="mb-4">
              <label className="mb-1 block text-sm">Button Type</label>

              <input
                type="text"
                value={button.type}
                placeholder="Primary Button"
                onChange={(e) => {
                  updateButtonStyles((prev) =>
                    prev.map((b, i) =>
                      i === index
                        ? {
                            ...b,
                            type: e.target.value,
                          }
                        : b,
                    ),
                  );
                }}
                className="w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Button Color */}
            <div className="mb-4">
              <label className="mb-1 block text-sm">Button Color</label>

              <input
                type="text"
                value={button.color}
                placeholder="Blue"
                onChange={(e) => {
                  updateButtonStyles((prev) =>
                    prev.map((b, i) =>
                      i === index
                        ? {
                            ...b,
                            color: e.target.value,
                          }
                        : b,
                    ),
                  );
                }}
                className="w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* States */}
            <div>
            {
                button.states.length > 0 && (
                    <>
                      <label className="mb-2 block text-sm">States</label>

              {button.states.map((state, stateIndex) => (
                <div key={stateIndex} className="mb-2 flex items-center gap-2">
                  <input
                    type="text"
                    value={state}
                    placeholder="Default"
                    onChange={(e) => {
                      updateButtonStyles((prev) =>
                        prev.map((b, i) =>
                          i === index
                            ? {
                                ...b,
                                states: b.states.map((s, j) =>
                                  j === stateIndex ? e.target.value : s,
                                ),
                              }
                            : b,
                        ),
                      );
                    }}
                    className="flex-1 rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />

                  {button.states.length > 1 && (
                    <button
                      type="button"
                      onClick={() => deleteState(index, stateIndex)}
                      className="rounded p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              ))}
               <button
                type="button"
                onClick={() => addState(index)}
                className="mt-3 rounded border px-3 py-2 text-sm active:bg-green-500 active:text-white hover:bg-gray-400 flex items-center gap-2"
              >
                <Plus size={16} />
                Add State
              </button>
              </>
                )
            }

             
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addButton}
          className="mt-3 rounded border px-4 py-2 text-sm active:bg-green-500 active:text-white hover:bg-gray-400 flex items-center gap-2"
        >
          <Plus size={16} />
          Add Button
        </button>
      </div>

      <div className="mt-8 rounded-lg border border-gray-700 p-4">
        <label className="font-medium">Inputs</label>

        {inputStyles.map((input, index) => (
          <div key={index} className="mb-6 border-b pb-6 last:border-b-0">
            <div className="mb-4 flex justify-end">
              {inputStyles.length > 1 && (
                <button
                  type="button"
                  onClick={() => deleteInput(index)}
                  className="text-gray-500 hover:text-red-500"
                >
                  <X />
                </button>
              )}
            </div>

            <label className="mb-2 block text-sm">States</label>

            {input.states.map((state, stateIndex) => (
              <div key={stateIndex} className="mb-2 flex items-center gap-2">
                <input
                  type="text"
                  value={state}
                  placeholder="Focus"
                  onChange={(e) => {
                    updateInputStyles((prev) =>
                      prev.map((inp, i) =>
                        i === index
                          ? {
                              ...inp,
                              states: inp.states.map((s, j) =>
                                j === stateIndex ? e.target.value : s,
                              ),
                            }
                          : inp,
                      ),
                    );
                  }}
                  className="flex-1 rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                {input.states.length > 1 && (
                  <button
                    type="button"
                    onClick={() => deleteInputState(index, stateIndex)}
                    className="rounded p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={() => addInputStateItem(index)}
              className="mt-2 rounded border px-3 py-2 text-sm hover:bg-gray-400 active:bg-green-500 active:text-white flex items-center gap-2"
            >
              <Plus size={16} />
              Add State
            </button>
          </div>
        ))}

        {/* <button
          type="button"
          onClick={addInputState}
          className="mt-4 rounded border px-4 py-2 text-sm hover:bg-gray-400 active:bg-green-500 active:text-white flex items-center gap-2"
        >
          <Plus size={16} />
          Add Input
        </button> */}
      </div>

      <div className="mt-8 rounded-lg border border-gray-700 p-4">
        <label className="font-medium">Cards</label>

        {cardStyles.map((card, index) => (
          <div key={index} className="mb-6 border-b pb-6 last:border-b-0">
            <div className="mb-4 flex justify-end">
              {cardStyles.length > 1 && (
                <button
                  type="button"
                  onClick={() => deleteCard(index)}
                  className="text-gray-500 hover:text-red-500"
                >
                  <X />
                </button>
              )}
            </div>

            <label className="mb-2 block text-sm">Features</label>

            {card.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="mb-2 flex items-center gap-2">
                <input
                  type="text"
                  value={feature}
                  placeholder="Soft Border"
                  onChange={(e) => {
                    updateCardStyles((prev) =>
                      prev.map((c, i) =>
                        i === index
                          ? {
                              ...c,
                              features: c.features.map((f, j) =>
                                j === featureIndex ? e.target.value : f,
                              ),
                            }
                          : c,
                      ),
                    );
                  }}
                  className="flex-1 rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                {card.features.length > 1 && (
                  <button
                    type="button"
                    onClick={() => deleteCardFeature(index, featureIndex)}
                    className="rounded p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={() => addCardFeature(index)}
              className="mt-2 rounded border px-3 py-2 text-sm hover:bg-gray-400 active:bg-green-500 active:text-white flex items-center gap-2"
            >
              <Plus size={16} />
              Add Feature
            </button>
          </div>
        ))}

        {/* <button
          type="button"
          onClick={addCard}
          className="mt-4 rounded border px-4 py-2 text-sm hover:bg-gray-400 active:bg-green-500 active:text-white flex items-center gap-2"
        >
          <Plus size={16} />
          Add Card
        </button> */}
      </div>

      <div className="mt-8 rounded-lg border border-gray-700 p-4">
        <label className="font-medium">Navigation</label>

        {navigationStyles.map((nav, index) => (
          <div key={index} className="mb-6 border-b pb-6 last:border-b-0">
            <div className="mb-4 flex justify-end">
              {navigationStyles.length > 1 && (
                <button
                  type="button"
                  onClick={() => deleteNavigation(index)}
                  className="text-gray-500 hover:text-red-500"
                >
                  <X />
                </button>
              )}
            </div>

            <label className="mb-2 block text-sm">Features</label>

            {nav.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="mb-2 flex items-center gap-2">
                <input
                  type="text"
                  value={feature}
                  placeholder="Clear active states"
                  onChange={(e) => {
                    updateNavigationStyles((prev) =>
                      prev.map((n, i) =>
                        i === index
                          ? {
                              ...n,
                              features: n.features.map((f, j) =>
                                j === featureIndex ? e.target.value : f,
                              ),
                            }
                          : n,
                      ),
                    );
                  }}
                  className="flex-1 rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                {nav.features.length > 1 && (
                  <button
                    type="button"
                    onClick={() => deleteNavigationFeature(index, featureIndex)}
                    className="rounded p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={() => addNavigationFeature(index)}
              className="mt-2 rounded border px-3 py-2 text-sm hover:bg-gray-400 active:bg-green-500 active:text-white flex items-center gap-2"
            >
              <Plus size={16} />
              Add Feature
            </button>
          </div>
        ))}

        {/* <button
          type="button"
          onClick={addNavigation}
          className="mt-4 rounded border px-4 py-2 text-sm hover:bg-gray-400 active:bg-green-500 active:text-white flex items-center gap-2"
        >
          <Plus size={16} />
          Add Navigation
        </button> */}
      </div>

      <div className="mt-8 rounded-lg border border-gray-700 p-4">
        <label className="font-medium">Feedback Components</label>

        {feedbackStyles.map((feedback, index) => (
          <div key={index} className="mb-6 border-b pb-6 last:border-b-0">
            <div className="mb-4 flex justify-end">
              {feedbackStyles.length > 1 && (
                <button
                  type="button"
                  onClick={() => deleteFeedback(index)}
                  className="text-gray-500 hover:text-red-500"
                >
                  <X />
                </button>
              )}
            </div>

            <label className="mb-2 block text-sm">Types</label>

            {feedback.types.map((type, typeIndex) => (
              <div key={typeIndex} className="mb-2 flex items-center gap-2">
                <input
                  type="text"
                  value={type}
                  placeholder="Success"
                  onChange={(e) => {
                    updateFeedbackStyles((prev) =>
                      prev.map((f, i) =>
                        i === index
                          ? {
                              ...f,
                              types: f.types.map((t, j) =>
                                j === typeIndex ? e.target.value : t,
                              ),
                            }
                          : f,
                      ),
                    );
                  }}
                  className="flex-1 rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                {feedback.types.length > 1 && (
                  <button
                    type="button"
                    onClick={() => deleteFeedbackType(index, typeIndex)}
                    className="rounded p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={() => addFeedbackType(index)}
              className="mt-2 rounded border px-3 py-2 text-sm hover:bg-gray-400 active:bg-green-500 active:text-white flex items-center gap-2"
            >
              <Plus size={16} />
              Add Type
            </button>
          </div>
        ))}

        {/* <button
          type="button"
          onClick={addFeedback}
          className="mt-4 rounded border px-4 py-2 text-sm hover:bg-gray-400 active:bg-green-500 active:text-white flex items-center gap-2"
        >
          <Plus size={16} />
          Add Feedback
        </button> */}
      </div>
    </div>
    
    </div>
  );
};

export default ComponentStyles;
