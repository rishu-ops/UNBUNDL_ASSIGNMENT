import React, { forwardRef, useId, useState } from "react";
import "./Input.css";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onFocus' | 'onBlur' | 'value' | 'defaultValue'> {
    label: string;
    required?: boolean;
    helperText?: string;
    error?: boolean;
    errorMessage?: string;
    disabled?: boolean;
    type?: string;
    value?: string | number;
    defaultValue?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    maxLength?: number;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    fullWidth?: boolean;
    id?: string;
    name?: string;
    className?: string;
}

/**
 * Input — a self-contained floating-label text field (MUI-outlined style)
 * Plain CSS version — no Tailwind required.
 */
const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    {
        label,
        required = false,
        helperText,
        error = false,
        errorMessage,
        disabled = false,
        type = "text",
        value,
        defaultValue,
        onChange,
        onFocus,
        onBlur,
        maxLength,
        startAdornment,
        endAdornment,
        fullWidth = true,
        id,
        name,
        className = "",
        ...rest
    },
    ref
) {
    const autoId = useId();
    const inputId = id || autoId;
    const helperId = `${inputId}-helper`;

    const [focused, setFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue ?? "");
    const [showPassword, setShowPassword] = useState(false);

    // Support both controlled and uncontrolled usage without throwing
    // the classic "changing an uncontrolled input" React warning.
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;
    const hasValue = currentValue !== undefined && currentValue !== null && String(currentValue).length > 0;

    const isPassword = type === "password";
    const effectiveType = isPassword && showPassword ? "text" : type;

    const floated = focused || hasValue || (rest.placeholder && !isPassword);
    const charCount = String(currentValue ?? "").length;
    const overLimit = typeof maxLength === "number" && charCount > maxLength;

    const showError = Boolean(error || overLimit);
    const describedBy = helperText || errorMessage || maxLength ? helperId : undefined;

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (!isControlled) setInternalValue(e.target.value);
        onChange?.(e);
    }

    function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
        setFocused(true);
        onFocus?.(e);
    }

    function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
        setFocused(false);
        onBlur?.(e);
    }

    // Build the wrapper's class list based on state — plain string concat,
    // no clsx dependency needed.
    const wrapperClasses = [
        "ti-field",
        focused && "ti-field--focused",
        showError && "ti-field--error",
        disabled && "ti-field--disabled",
    ]
        .filter(Boolean)
        .join(" ");

    const labelClasses = [
        "ti-label",
        floated && "ti-label--floated",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={`ti-root ${fullWidth ? "ti-root--full" : ""} ${className}`}>
            <div className={wrapperClasses}>
                <label htmlFor={inputId} className={labelClasses}>
                    {label}
                    {required && <span className="ti-asterisk"> *</span>}
                </label>

                <div className="ti-row">
                    {startAdornment && <span className="ti-adornment">{startAdornment}</span>}

                    <input
                        ref={ref}
                        id={inputId}
                        name={name}
                        type={effectiveType}
                        value={isControlled ? value : internalValue}
                        disabled={disabled}
                        required={required}
                        aria-required={required || undefined}
                        aria-invalid={showError || undefined}
                        aria-describedby={describedBy}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        className="ti-input"
                        {...rest}
                    />

                    {isPassword && !disabled && (
                        <button
                            type="button"
                            tabIndex={0}
                            onClick={() => setShowPassword((s) => !s)}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                            className="ti-toggle"
                        >
                            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                        </button>
                    )}

                    {!isPassword && endAdornment && <span className="ti-adornment">{endAdornment}</span>}
                </div>
            </div>

            {(helperText || errorMessage || maxLength) && (
                <div id={helperId} className="ti-helper-row">
                    <p className={`ti-helper-text ${showError ? "ti-helper-text--error" : ""}`}>
                        {showError ? errorMessage || helperText : helperText}
                    </p>
                    {typeof maxLength === "number" && (
                        <span className={`ti-counter ${overLimit ? "ti-counter--error" : ""}`}>
                            {charCount}/{maxLength}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
});

function EyeIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
}

function EyeOffIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a18.6 18.6 0 0 1 4.22-5.06M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 7 11 7a18.6 18.6 0 0 1-2.16 2.94" />
            <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
            <path d="M1 1l22 22" />
        </svg>
    );
}

export default Input;