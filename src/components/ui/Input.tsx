import React, { forwardRef, useId, useState } from "react";

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
    const describedBy = helperText || errorMessage || overLimit ? helperId : undefined;

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

    const borderColor = disabled
        ? "border-zinc-100"
        : showError
            ? "border-red-500"
            : focused
                ? "border-[#8F62D4]"
                : "border-zinc-300 hover:border-zinc-400";

    const labelColor = disabled
        ? "text-zinc-300"
        : showError
            ? "text-red-500"
            : focused
                ? "text-[#8F62D4]"
                : "text-zinc-400";

    return (
        <div className={`${fullWidth ? "w-full" : "inline-block"} ${className}`}>
            <div
                className={[
                    "relative rounded-lg border bg-white transition-colors duration-150",
                    borderColor,
                    disabled ? "opacity-60 cursor-not-allowed" : "",
                ].join(" ")}
            >
                {/* Floating label */}
                <label
                    htmlFor={inputId}
                    className={[
                        "pointer-events-none absolute left-3 origin-left select-none transition-all duration-150 bg-white px-1",
                        labelColor,
                        floated
                            ? "top-0 -translate-y-1/2 text-[11px]"
                            : "top-1/2 -translate-y-1/2 text-base",
                    ].join(" ")}
                >
                    {label}
                    {required && <span className={showError ? "text-red-500" : "text-zinc-500"}> *</span>}
                </label>

                <div className="flex items-center gap-2 px-3 pt-4 pb-2 min-h-[56px]">
                    {startAdornment && <span className="flex-shrink-0 text-zinc-400">{startAdornment}</span>}

                    <input
                        ref={ref}
                        id={inputId}
                        name={name}
                        type={effectiveType}
                        value={isControlled ? value : internalValue}
                        disabled={disabled}
                        required={required}
                        maxLength={undefined /* enforce visually, not by truncation, see counter */}
                        aria-required={required || undefined}
                        aria-invalid={showError || undefined}
                        aria-describedby={describedBy}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        className="w-full bg-transparent text-zinc-800 placeholder-transparent outline-none disabled:cursor-not-allowed text-base leading-none"
                        {...rest}
                    />

                    {isPassword && !disabled && (
                        <button
                            type="button"
                            tabIndex={0}
                            onClick={() => setShowPassword((s) => !s)}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                            className="flex-shrink-0 text-zinc-400 hover:text-zinc-200 transition-colors"
                        >
                            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                        </button>
                    )}

                    {!isPassword && endAdornment && (
                        <span className="flex-shrink-0 text-zinc-400">{endAdornment}</span>
                    )}
                </div>
            </div>

            {/* Helper text / error message / character counter */}
            {(helperText || errorMessage || maxLength) && (
                <div id={helperId} className="mt-1.5 flex items-start justify-between gap-2 px-1">
                    <p className={`text-xs ${showError ? "text-red-500" : "text-zinc-500"}`}>
                        {showError ? errorMessage || helperText : helperText}
                    </p>
                    {typeof maxLength === "number" && (
                        <span className={`text-xs flex-shrink-0 ${overLimit ? "text-red-500" : "text-zinc-500"}`}>
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

// ---------------------------------------------------------------------------
// Demo — shows the component covering the edge cases described above.
// ---------------------------------------------------------------------------
export function InputDemo() {
    const [name, setName] = useState("Hello World");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("not-an-email");
    const [bio, setBio] = useState("");

    const emailError = email.length > 0 && !email.includes("@");

    return (
        <div className="min-h-screen bg-zinc-950 flex justify-center p-8">
            <div className="w-full max-w-sm flex flex-col gap-5">
                <h1 className="text-zinc-300 text-sm font-medium mb-1">Input component</h1>

                <Input
                    label="Required"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <Input
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    helperText="Use 8 or more characters with a mix of letters and numbers."
                />

                <Input
                    label="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={emailError}
                    errorMessage="Enter a valid email address."
                />

                <Input
                    label="Disabled field"
                    value="Can't touch this"
                    disabled
                />

                <Input
                    label="Bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    maxLength={120}
                    helperText="A short line about yourself."
                />
            </div>
        </div>
    );
}