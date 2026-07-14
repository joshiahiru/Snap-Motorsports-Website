/* @ds-bundle: {"format":4,"namespace":"SnapMotorsportsDesignSystem_e003c3","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"CartScreen","sourcePath":"ui_kits/storefront/CartScreen.jsx"},{"name":"CategoryScreen","sourcePath":"ui_kits/storefront/CategoryScreen.jsx"},{"name":"HomeScreen","sourcePath":"ui_kits/storefront/HomeScreen.jsx"},{"name":"ProductScreen","sourcePath":"ui_kits/storefront/ProductScreen.jsx"},{"name":"SiteFooter","sourcePath":"ui_kits/storefront/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"ui_kits/storefront/SiteHeader.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"bf9fe76cdd6d","components/core/Button.jsx":"7a7c55d4ab8e","components/core/Card.jsx":"dfaeebc3f6ab","components/core/IconButton.jsx":"e294af5bbd9f","components/core/Tag.jsx":"c904e15a8a6f","components/feedback/Dialog.jsx":"e54b96e98ad4","components/feedback/Toast.jsx":"27ddb5694138","components/feedback/Tooltip.jsx":"c9d2b3706965","components/forms/Checkbox.jsx":"3a554d1277f7","components/forms/Input.jsx":"02edee58186a","components/forms/Radio.jsx":"51b6dc578fe5","components/forms/Select.jsx":"349708752f6d","components/forms/Switch.jsx":"86342bd4e83e","components/navigation/Tabs.jsx":"401133198d9b","ui_kits/storefront/CartScreen.jsx":"1ae3893b5718","ui_kits/storefront/CategoryScreen.jsx":"e119daeb70fb","ui_kits/storefront/HomeScreen.jsx":"6ed53efec4df","ui_kits/storefront/ProductScreen.jsx":"f7a2d7f88f6b","ui_kits/storefront/SiteFooter.jsx":"e9cdb8b76e82","ui_kits/storefront/SiteHeader.jsx":"95505e6862c8"},"inlinedExternals":[],"unexposedExports":[{"name":"products","sourcePath":"ui_kits/storefront/HomeScreen.jsx"}]} */

(() => {

const __ds_ns = (window.SnapMotorsportsDesignSystem_e003c3 = window.SnapMotorsportsDesignSystem_e003c3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const tones = {
  neutral: {
    bg: 'var(--snap-ink-100)',
    fg: 'var(--snap-ink-800)',
    border: 'var(--border-default)'
  },
  brand: {
    bg: 'var(--color-brand)',
    fg: '#fff',
    border: 'var(--color-brand)'
  },
  success: {
    bg: 'var(--status-success-bg)',
    fg: 'var(--snap-ink-900)',
    border: 'var(--status-success)'
  },
  warning: {
    bg: 'var(--status-warning-bg)',
    fg: 'var(--snap-ink-900)',
    border: 'var(--status-warning)'
  },
  danger: {
    bg: 'var(--status-danger-bg)',
    fg: 'var(--snap-ink-900)',
    border: 'var(--status-danger)'
  }
};

/** Small status/label chip — square-ish corners, uppercase, used for stock state, "NEW", categories. */
function Badge({
  children,
  tone = 'neutral'
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      fontSize: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-label-caps)',
      textTransform: 'uppercase',
      padding: '3px 8px',
      borderRadius: 'var(--radius-sm)',
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.border}`
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizeStyles = {
  sm: {
    padding: '8px 14px',
    fontSize: 'var(--text-label-md)'
  },
  md: {
    padding: '11px 20px',
    fontSize: 'var(--text-label-lg)'
  },
  lg: {
    padding: '14px 26px',
    fontSize: '16px'
  }
};
const variantStyles = {
  primary: {
    background: 'var(--color-brand)',
    color: 'var(--text-on-brand)',
    border: '1px solid var(--color-brand)'
  },
  secondary: {
    background: 'var(--snap-ink-950)',
    color: '#fff',
    border: '1px solid var(--snap-ink-950)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid transparent'
  },
  danger: {
    background: 'var(--status-danger)',
    color: '#fff',
    border: '1px solid var(--status-danger)'
  }
};

/** Snap Motorsports primary action control — flat fill, square-ish corners, hard press state. */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon = null,
  fullWidth = false,
  onClick,
  type = 'button'
}) {
  const [state, setState] = React.useState('rest');
  const v = variantStyles[variant] || variantStyles.primary;
  const s = sizeStyles[size] || sizeStyles.md;
  let background = v.background;
  let translate = 'translateY(0)';
  if (!disabled) {
    if (state === 'hover') {
      background = variant === 'primary' ? 'var(--color-brand-hover)' : variant === 'outline' || variant === 'ghost' ? 'var(--snap-ink-100)' : v.background;
    }
    if (state === 'press') {
      background = variant === 'primary' ? 'var(--color-brand-active)' : v.background;
      translate = 'translateY(1px)';
    }
  }
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setState('hover'),
    onMouseLeave: () => setState('rest'),
    onMouseDown: () => setState('press'),
    onMouseUp: () => setState('hover'),
    style: {
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label-caps)',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      width: fullWidth ? '100%' : 'auto',
      transition: 'background var(--duration-fast) var(--ease-standard), transform var(--duration-instant) var(--ease-standard)',
      transform: translate,
      opacity: disabled ? 0.45 : 1,
      ...s,
      ...v,
      background
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
/** Spec-plate surface: hairline border, small radius, no shadow at rest — shadow only when raised/interactive. */
function Card({
  children,
  interactive = false,
  padding = 'var(--space-4)'
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding,
      boxShadow: hover ? 'var(--shadow-md)' : 'none',
      transform: hover ? 'translateY(-1px)' : 'none',
      transition: 'box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)',
      cursor: interactive ? 'pointer' : 'default'
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
/** Square icon-only control for toolbars, cards, and compact actions. */
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 36,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const isGhost = variant === 'ghost';
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    title: label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-sm)',
      border: isGhost ? '1px solid transparent' : '1px solid var(--border-default)',
      background: hover ? isGhost ? 'var(--snap-ink-100)' : 'var(--snap-ink-950)' : isGhost ? 'transparent' : '#fff',
      color: hover && !isGhost ? '#fff' : 'var(--text-primary)',
      cursor: 'pointer',
      transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard)'
    }
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/** Removable filter/fitment chip — used in filter bars and "your vehicle" selectors. */
function Tag({
  children,
  onRemove
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 500,
      padding: '6px 8px 6px 12px',
      borderRadius: 'var(--radius-pill)',
      background: '#fff',
      border: '1px solid var(--border-default)',
      color: 'var(--text-primary)'
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-tertiary)',
      fontSize: '14px',
      lineHeight: 1,
      padding: '2px 4px'
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/** Modal dialog — dark scrim (the one place transparency/blur-adjacent effects are used), square white panel. */
function Dialog({
  open,
  title,
  children,
  onClose,
  footer
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'color-mix(in oklch, var(--surface-overlay) 65%, transparent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      width: 420,
      maxWidth: '90vw',
      padding: 'var(--space-6)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontSize: 16,
      color: 'var(--text-tertiary)'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 'var(--text-body-md)',
      lineHeight: 'var(--leading-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const tones = {
  info: {
    bg: 'var(--snap-ink-950)',
    accent: 'var(--color-brand)'
  },
  success: {
    bg: 'var(--snap-ink-950)',
    accent: 'var(--status-success)'
  },
  danger: {
    bg: 'var(--snap-ink-950)',
    accent: 'var(--status-danger)'
  }
};

/** Transient bottom-corner notification — dark plate with a colored left accent bar (only place a left-accent is used, since it denotes a system message, not a content card). */
function Toast({
  message,
  tone = 'info',
  onClose
}) {
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: t.bg,
      color: '#fff',
      borderLeft: `3px solid ${t.accent}`,
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px',
      boxShadow: 'var(--shadow-lg)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      maxWidth: 340
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, message), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'transparent',
      border: 'none',
      color: 'var(--snap-ink-300)',
      cursor: 'pointer',
      fontSize: 14
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** Hover tooltip — dark plate, no arrow (kept flat/hard-edged), fast fade. */
function Tooltip({
  children,
  label,
  position = 'top'
}) {
  const [show, setShow] = React.useState(false);
  const posStyle = position === 'top' ? {
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginBottom: 6
  } : {
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: 6
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      ...posStyle,
      background: 'var(--snap-ink-950)',
      color: '#fff',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      padding: '5px 8px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      zIndex: 10,
      boxShadow: 'var(--shadow-md)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Square (not rounded) checkbox — matches the brand's hard-edged shape language. */
function Checkbox({
  label,
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-md)',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${checked ? 'var(--color-brand)' : 'var(--border-strong)'}`,
      background: checked ? 'var(--color-brand)' : '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 12,
      flexShrink: 0,
      transition: 'background var(--duration-fast) var(--ease-standard)'
    }
  }, checked && '✓'), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
/** Text input — hairline border, brand-blue 2px focus ring instead of a glow. */
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  suffix
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-label-md)',
      fontWeight: 600,
      color: 'var(--text-secondary)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label-caps)',
      fontFamily: 'var(--font-label)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      font: 'inherit',
      fontSize: 'var(--text-body-md)',
      padding: '10px 12px',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${error ? 'var(--status-danger)' : focused ? 'var(--color-brand)' : 'var(--border-default)'}`,
      outline: 'none',
      boxShadow: focused ? 'var(--shadow-focus)' : 'none',
      background: '#fff',
      color: 'var(--text-primary)',
      boxSizing: 'border-box'
    }
  }), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 10,
      color: 'var(--text-tertiary)',
      fontSize: 13
    }
  }, suffix)), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--status-danger)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/** Circular radio — the one deliberately round control, for exclusive choice (e.g. finish/color). */
function Radio({
  label,
  checked,
  onChange,
  name
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-md)',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(),
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      border: `1px solid ${checked ? 'var(--color-brand)' : 'var(--border-strong)'}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--color-brand)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/** Native-backed select — same field chrome as Input, plus a chevron. */
function Select({
  label,
  value,
  onChange,
  options = [],
  placeholder = 'Select...'
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-label-md)',
      fontWeight: 600,
      color: 'var(--text-secondary)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label-caps)',
      fontFamily: 'var(--font-label)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      font: 'inherit',
      fontSize: 'var(--text-body-md)',
      padding: '10px 32px 10px 12px',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${focused ? 'var(--color-brand)' : 'var(--border-default)'}`,
      outline: 'none',
      boxShadow: focused ? 'var(--shadow-focus)' : 'none',
      background: '#fff',
      color: 'var(--text-primary)',
      appearance: 'none',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 10,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-tertiary)',
      fontSize: 11
    }
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Toggle switch — mechanical snap feel: hard step, no bounce. */
function Switch({
  checked,
  onChange,
  label
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-md)',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 40,
      height: 22,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--color-brand)' : 'var(--snap-ink-300)',
      position: 'relative',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 20 : 2,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--duration-fast) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Underline-indicator tab bar — square, no pill background, brand-blue active underline. */
function Tabs({
  tabs = [],
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderBottom: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-label)'
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.value,
    onClick: () => onChange && onChange(t.value),
    style: {
      background: 'transparent',
      border: 'none',
      padding: '12px 18px',
      fontWeight: 600,
      fontSize: 'var(--text-label-lg)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label-caps)',
      color: active === t.value ? 'var(--text-primary)' : 'var(--text-tertiary)',
      borderBottom: `2px solid ${active === t.value ? 'var(--color-brand)' : 'transparent'}`,
      marginBottom: '-1px',
      cursor: 'pointer',
      transition: 'color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)'
    }
  }, t.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/CartScreen.jsx
try { (() => {
/** Cart / checkout summary screen. */
function CartScreen({
  ds,
  items = [],
  onCheckout
}) {
  const {
    Button,
    IconButton
  } = ds;
  const total = items.reduce((sum, i) => sum + i.priceNum * i.qty, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '32px 24px 64px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-display-sm)',
      margin: '0 0 24px',
      color: 'var(--text-primary)'
    }
  }, "YOUR CART"), items.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-secondary)'
    }
  }, "Cart is empty \u2014 go build your kit.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 320px',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, items.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      padding: '16px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      background: 'var(--snap-ink-100)',
      borderRadius: 'var(--radius-sm)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--text-primary)'
    }
  }, item.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-tertiary)',
      fontFamily: 'var(--font-body)'
    }
  }, "Finish: ", item.finish || 'Black')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, "Qty ", item.qty), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--text-primary)',
      width: 90,
      textAlign: 'right'
    }
  }, "$", (item.priceNum * item.qty).toLocaleString()), /*#__PURE__*/React.createElement(IconButton, {
    label: "Remove",
    variant: "ghost",
    icon: /*#__PURE__*/React.createElement("span", null, "\u2715")
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 24,
      alignSelf: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("span", null, "$", total.toLocaleString())), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", null, "Shipping"), /*#__PURE__*/React.createElement("span", null, "Free")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--text-primary)',
      marginBottom: 20,
      paddingTop: 12,
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, "$", total.toLocaleString())), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    onClick: onCheckout
  }, "Checkout"))));
}
Object.assign(__ds_scope, { CartScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/CartScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/HomeScreen.jsx
try { (() => {
const products = [{
  name: 'Track Series Coilover Kit',
  cat: 'Coilovers',
  price: '$1,895',
  stock: 'success',
  stockLabel: 'In Stock'
}, {
  name: 'Street Series Coilover Kit',
  cat: 'Coilovers',
  price: '$1,295',
  stock: 'success',
  stockLabel: 'In Stock'
}, {
  name: 'Adjustable Front Sway Bar',
  cat: 'Sway Bars',
  price: '$395',
  stock: 'warning',
  stockLabel: 'Low Stock'
}, {
  name: 'Rear Sway Bar Kit',
  cat: 'Sway Bars',
  price: '$310',
  stock: 'success',
  stockLabel: 'In Stock'
}, {
  name: 'Polyurethane Bushing Set',
  cat: 'Bushings',
  price: '$180',
  stock: 'success',
  stockLabel: 'In Stock'
}, {
  name: 'Camber Plate Kit',
  cat: 'Coilovers',
  price: '$420',
  stock: 'danger',
  stockLabel: 'Backordered'
}];

/** Homepage — hero + featured categories + product grid, using core Card/Badge components. */
function HomeScreen({
  ds,
  onOpenProduct
}) {
  const {
    Card,
    Badge,
    Button
  } = ds;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-brand)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '80px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      fontSize: 14,
      marginBottom: 12
    }
  }, "Track-Proven Suspension"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-display-xl)',
      lineHeight: 'var(--leading-display)',
      letterSpacing: 'var(--tracking-display)',
      margin: '0 0 16px'
    }
  }, "DIAL IT IN."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      maxWidth: 440,
      color: 'rgba(255,255,255,0.9)',
      margin: '0 0 28px'
    }
  }, "Coilovers, sway bars, and bushings built for the street, proven on track."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "Shop Coilovers")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 320,
      height: 220,
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid rgba(255,255,255,0.25)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(255,255,255,0.6)',
      fontFamily: 'var(--font-label)',
      fontSize: 13,
      textAlign: 'center',
      flexShrink: 0
    }
  }, "Vehicle / product photography placeholder"))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-display-sm)',
      margin: 0,
      color: 'var(--text-primary)'
    }
  }, "SHOP BY PART")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, ['Coilovers', 'Sway Bars', 'Bushings', 'Camber Plates'].map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      background: 'var(--snap-ink-100)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: '28px 16px',
      textAlign: 'center',
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label-caps)',
      color: 'var(--text-primary)',
      cursor: 'pointer'
    }
  }, c)))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 24px 64px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-display-sm)',
      margin: '0 0 24px',
      color: 'var(--text-primary)'
    }
  }, "FEATURED"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, products.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onOpenProduct && onOpenProduct(p)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 140,
      background: 'var(--snap-ink-100)',
      borderRadius: 'var(--radius-sm)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-tertiary)',
      fontSize: 12,
      fontFamily: 'var(--font-label)',
      marginBottom: 12
    }
  }, "Product photo placeholder"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      textTransform: 'uppercase',
      fontSize: 12,
      letterSpacing: 'var(--tracking-label-caps)',
      color: 'var(--text-tertiary)',
      marginBottom: 4
    }
  }, p.cat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      marginBottom: 8,
      color: 'var(--text-primary)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-primary)'
    }
  }, p.price), /*#__PURE__*/React.createElement(Badge, {
    tone: p.stock
  }, p.stockLabel))))))));
}
Object.assign(__ds_scope, { HomeScreen, products });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/CategoryScreen.jsx
try { (() => {
/** Category / product listing page — filter sidebar + grid, using Checkbox/Tag/Card/Badge. */
function CategoryScreen({
  ds,
  onOpenProduct
}) {
  const {
    Checkbox,
    Tag,
    Card,
    Badge
  } = ds;
  const [inStock, setInStock] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '32px 24px 64px',
      display: 'flex',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 220,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label-caps)',
      fontSize: 13,
      color: 'var(--text-tertiary)',
      marginBottom: 12
    }
  }, "Filter"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    onRemove: () => {}
  }, "Vehicle: 2022 WRX")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingBottom: 20,
      borderBottom: '1px solid var(--border-subtle)',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "In stock only",
    checked: inStock,
    onChange: setInStock
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Track use",
    checked: false
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Street use",
    checked: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label-caps)',
      fontSize: 13,
      color: 'var(--text-tertiary)',
      marginBottom: 12
    }
  }, "Category"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Coilovers (12)"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)'
    }
  }, "Sway Bars (8)"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)'
    }
  }, "Bushings (6)"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-display-sm)',
      margin: 0,
      color: 'var(--text-primary)'
    }
  }, "COILOVERS"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-tertiary)'
    }
  }, "12 results")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, __ds_scope.products.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onOpenProduct && onOpenProduct(p)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 130,
      background: 'var(--snap-ink-100)',
      borderRadius: 'var(--radius-sm)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-tertiary)',
      fontSize: 12,
      fontFamily: 'var(--font-label)',
      marginBottom: 12
    }
  }, "Product photo placeholder"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      marginBottom: 8,
      color: 'var(--text-primary)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--text-primary)'
    }
  }, p.price), /*#__PURE__*/React.createElement(Badge, {
    tone: p.stock
  }, p.stockLabel))))))));
}
Object.assign(__ds_scope, { CategoryScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/CategoryScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ProductScreen.jsx
try { (() => {
/** Product detail page — spec table, finish/adjustment selectors, Tabs, add-to-cart. */
function ProductScreen({
  ds,
  product,
  onAddToCart
}) {
  const {
    Badge,
    Button,
    Radio,
    Tabs
  } = ds;
  const [finish, setFinish] = React.useState('black');
  const [tab, setTab] = React.useState('specs');
  const p = product || {
    name: 'Track Series Coilover Kit',
    price: '$1,895',
    stock: 'success',
    stockLabel: 'In Stock'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '32px 24px 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 420,
      background: 'var(--snap-ink-100)',
      borderRadius: 'var(--radius-md)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-tertiary)',
      fontFamily: 'var(--font-label)',
      fontSize: 13
    }
  }, "Product photo placeholder"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label-caps)',
      fontSize: 13,
      color: 'var(--text-tertiary)',
      marginBottom: 8
    }
  }, "Coilovers"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-display-md)',
      margin: '0 0 12px',
      color: 'var(--text-primary)',
      lineHeight: 'var(--leading-display)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 24,
      color: 'var(--text-primary)'
    }
  }, p.price), /*#__PURE__*/React.createElement(Badge, {
    tone: p.stock
  }, p.stockLabel)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-secondary)',
      maxWidth: 440,
      marginBottom: 24
    }
  }, "Monotube construction, rebuildable for the life of the car. 32-way independent bump and rebound adjustment \u2014 dial in the commute or the front straight."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label-caps)',
      fontSize: 13,
      color: 'var(--text-tertiary)',
      marginBottom: 10
    }
  }, "Finish"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "finish",
    label: "Black",
    checked: finish === 'black',
    onChange: () => setFinish('black')
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "finish",
    label: "Silver",
    checked: finish === 'silver',
    onChange: () => setFinish('silver')
  }))), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    onClick: () => onAddToCart && onAddToCart(p)
  }, "Add to Cart"))), /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      value: 'specs',
      label: 'Specs'
    }, {
      value: 'fitment',
      label: 'Fitment'
    }, {
      value: 'reviews',
      label: 'Reviews'
    }],
    active: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 0',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-secondary)',
      maxWidth: 640
    }
  }, tab === 'specs' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      fontSize: 14
    }
  }, [['Travel', '4.2 in'], ['Adjustment', '32-way'], ['Weight / corner', '6.1 lb'], ['Spring rate, front', '8 kg/mm'], ['Construction', 'Monotube'], ['Rebuildable', 'Yes']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, v)))), tab === 'fitment' && /*#__PURE__*/React.createElement("p", null, "Confirm your vehicle in Garage to check fitment for this kit."), tab === 'reviews' && /*#__PURE__*/React.createElement("p", null, "No reviews yet \u2014 be the first to run this kit.")));
}
Object.assign(__ds_scope, { ProductScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ProductScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/SiteFooter.jsx
try { (() => {
/** Simple footer shared across storefront screens. */
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--snap-ink-950)',
      color: 'var(--snap-ink-300)',
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '40px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-body)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 2026 Snap Motorsports. Built for street or track."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label-caps)',
      fontFamily: 'var(--font-label)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", null, "Shipping"), /*#__PURE__*/React.createElement("span", null, "Warranty"), /*#__PURE__*/React.createElement("span", null, "Contact"))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/SiteHeader.jsx
try { (() => {
/** Site header used across all storefront screens. */
function SiteHeader({
  active = 'home',
  onNav
}) {
  const nav = [{
    key: 'home',
    label: 'Home'
  }, {
    key: 'plp',
    label: 'Coilovers'
  }, {
    key: 'plp2',
    label: 'Sway Bars'
  }, {
    key: 'account',
    label: 'Garage'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--snap-ink-950)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      padding: '14px 24px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/snap-logo-mark.svg",
    alt: "Snap Motorsports",
    style: {
      height: 34
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 24,
      fontFamily: 'var(--font-label)',
      fontWeight: 600,
      fontSize: 14,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label-caps)',
      flex: 1
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.key,
    onClick: e => {
      e.preventDefault();
      onNav && onNav(n.key);
    },
    href: "#",
    style: {
      color: active === n.key ? '#fff' : 'var(--snap-ink-300)',
      textDecoration: 'none',
      paddingBottom: 4,
      borderBottom: active === n.key ? '2px solid var(--color-brand)' : '2px solid transparent'
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      fontSize: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: 'pointer'
    }
  }, "\uD83D\uDD0D"), /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: 'pointer'
    },
    onClick: () => onNav && onNav('cart')
  }, "\uD83D\uDED2"))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.CartScreen = __ds_scope.CartScreen;

__ds_ns.CategoryScreen = __ds_scope.CategoryScreen;

__ds_ns.HomeScreen = __ds_scope.HomeScreen;

__ds_ns.ProductScreen = __ds_scope.ProductScreen;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
