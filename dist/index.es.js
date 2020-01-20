Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var NavBrand_1 = require("./NavBrand");
var Hamburger_1 = require("./Hamburger");
var NavLinks_1 = require("./NavLinks");
var theme_1 = require("./theme");
var useScrollSlide_1 = require("./useScrollSlide");
var interfaces_1 = require("./interfaces");
exports.NavbarProps = interfaces_1.NavbarProps;
exports.ThemeProps = interfaces_1.ThemeProps;
exports.NavBrandProps = interfaces_1.NavBrandProps;
exports.NavLinkProp = interfaces_1.NavLinkProp;
var styles_css_1 = require("./styles.css");
var useState = React.useState;
var Navbar = function (_a) {
    var brand = _a.brand, _b = _a.leftLinks, leftLinks = _b === void 0 ? [] : _b, _c = _a.rightLinks, rightLinks = _c === void 0 ? [] : _c, _d = _a.theme, theme = _d === void 0 ? theme_1.defaultTheme : _d;
    var _e = useState(false), isToggled = _e[0], toggle = _e[1];
    var isHidden = useScrollSlide_1.default();
    theme_1.useTheme(theme);
    var navClassName = isHidden ? 'navHidden' : 'nav';
    var shouldShowHamburger = !!(leftLinks.length || rightLinks.length);
    var onHamburgerClick = function () { return toggle(!isToggled); };
    return (React.createElement("nav", { className: styles_css_1.default[navClassName], role: "navigation" },
        React.createElement(NavBrand_1.default, { route: "/", brand: brand }),
        shouldShowHamburger && (React.createElement(Hamburger_1.default, { isToggled: isToggled, onToggle: onHamburgerClick })),
        React.createElement(NavLinks_1.default, { isOpen: isToggled, leftLinks: leftLinks, rightLinks: rightLinks })));
};
exports.default = Navbar;
//# sourceMappingURL=index.es.js.map
