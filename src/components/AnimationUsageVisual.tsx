import { useState } from "react";
import { animationControls } from "../constants";
import type { AnimationControlId } from "../models/AnimationControlModel";

const initialEnabledAnimations: AnimationControlId[] = animationControls.map(
  (control) => control.id
); // Start with all animations enabled by default ["rotation", "sliding", "fade", "scale"]

const AnimationUsageVisual = () => {
  const [enabledAnimations, setEnabledAnimations] = useState<
    AnimationControlId[]
  >(initialEnabledAnimations);

  const totalWeight = animationControls
    .filter((control) => enabledAnimations.includes(control.id)) // Only include controls that are currently enabled
    .reduce((total, control) => total + control.weight, 0); // Calculate the total weight of enabled animations

  const toggleAnimation = (id: AnimationControlId) => {
    setEnabledAnimations(
      (currentAnimations) =>
        currentAnimations.includes(id)
          ? currentAnimations.filter((animationId) => animationId !== id) // If the animation is currently enabled, remove it from the list to disable it
          : [...currentAnimations, id] // If the animation is currently disabled, add it to the list to enable it
    ); // Toggle the animation by adding it to the list if it's not there, or removing it if it is

    console.log(`Toggled animation: ${id}. Enabled animations:`);
  };

  console.log(enabledAnimations);

  return (
    <div className="animation-visual">
      <div className="animation-visual-header">
        <div>
          <h4>Interactive Example</h4>
          <p>Toggle animations on and off to see their impact</p>
        </div>
        <p className="animation-total">
          <span>{totalWeight.toFixed(1)} KB</span>
        </p>
      </div>

      <div className="animation-stage" aria-hidden="true">
        {enabledAnimations.includes("rotation") && (
          <div className="animation-shape animation-shape--rotation"></div>
        )}
        {enabledAnimations.includes("sliding") && (
          <div className="animation-shape animation-shape--sliding"></div>
        )}
        {enabledAnimations.includes("fade") && (
          <div className="animation-shape animation-shape--fade"></div>
        )}
        {enabledAnimations.includes("scale") && (
          <div className="animation-shape animation-shape--scale"></div>
        )}
      </div>

      <div className="animation-control-panel">
        <p>Animation controls</p>
        <div className="animation-controls">
          {animationControls.map((control) => {
            // Iterate over all animation controls to render the control panel
            const isEnabled = enabledAnimations.includes(control.id); // Check if the current control is enabled based on the state

            return (
              <div className="animation-control" key={control.id}>
                <p>
                  {control.label} <span>{control.weight.toFixed(1)} KB</span>
                </p>
                <button
                  className="animation-toggle"
                  type="button"
                  aria-label={`${isEnabled ? "Disable" : "Enable"} ${
                    control.label
                  }`}
                  aria-pressed={isEnabled}
                  onClick={() => toggleAnimation(control.id)} // Toggle the animation when the button is clicked, passing the control's ID to the toggle function
                >
                  <span></span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <p className="animation-visual-note">
        Use visual and technical extras with purpose, not by default.
      </p>
    </div>
  );
};

export default AnimationUsageVisual;
