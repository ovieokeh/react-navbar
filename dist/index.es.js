import { useState, useEffect, createElement, createContext } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".navbrand_navBrand__2KiQe {\n  font-size: 1.5em;\n  text-decoration: none;\n  color: var(--main-color);\n}\n";
var styles = {"navBrand":"navbrand_navBrand__2KiQe"};
styleInject(css);

var NavigationBrand = function (_a) {
    var route = _a.route, brand = _a.brand;
    return (createElement("a", { className: styles.navBrand, href: route }, brand));
};

var css$1 = ".hamburger_hidden__pqnwa {\n  display: none;\n  background-color: transparent;\n  width: 28px;\n  height: 18px;\n  transform: rotate(0deg);\n  transition: 300ms ease-in-out;\n  border: none;\n  outline: transparent;\n  cursor: pointer;\n  z-index: 300;\n}\n\n.hamburger_bar__NcztP {\n  display: block;\n  position: absolute;\n  height: 3px;\n  width: 100%;\n  background-color: var(--main-color);\n  border-radius: 12px;\n  opacity: 1;\n  left: 0;\n  transform: rotate(0deg);\n  transform-origin: left center;\n  transition: 300ms ease-in-out;\n  pointer-events: none;\n}\n\n.hamburger_bar__NcztP:nth-child(1) {\n  top: 0px;\n}\n\n.hamburger_bar__NcztP:nth-child(2) {\n  top: 9px;\n}\n\n.hamburger_bar__NcztP:nth-child(3) {\n  top: 18px;\n}\n\n.hamburger_show__3aFvh {\n}\n\n.hamburger_barActive__3PlJO {\n  background: var(--main-color);\n  opacity: 0.6;\n}\n\n.hamburger_barActive__3PlJO:nth-child(1) {\n  transform: rotate(45deg);\n  top: 0;\n  left: 8px;\n}\n\n.hamburger_barActive__3PlJO:nth-child(2) {\n  width: 0%;\n  opacity: 0;\n}\n\n.hamburger_barActive__3PlJO:nth-child(3) {\n  transform: rotate(-45deg);\n  top: 20px;\n  left: 8px;\n}\n\n@media (max-width: 768px) {\n  .hamburger_hidden__pqnwa {\n    display: block;\n  }\n}\n";
var styles$1 = {"hidden":"hamburger_hidden__pqnwa","bar":"hamburger_bar__NcztP","show":"hamburger_show__3aFvh hamburger_hidden__pqnwa","barActive":"hamburger_barActive__3PlJO hamburger_bar__NcztP"};
styleInject(css$1);

var Hamburger = function (_a) {
    var isToggled = _a.isToggled, onToggle = _a.onToggle;
    var burgerClassname = isToggled ? 'show' : 'hidden';
    var pattyClassname = isToggled ? 'barActive' : 'bar';
    return (createElement("button", { className: styles$1[burgerClassname], type: "button", onClick: onToggle },
        createElement("span", { className: styles$1[pattyClassname] }),
        createElement("span", { className: styles$1[pattyClassname] }),
        createElement("span", { className: styles$1[pattyClassname] })));
};

var css$2 = ".navlinks_navLinks__1QLrV {\n  display: grid;\n  grid-template-columns: 60% 40%;\n  width: 100%;\n}\n\n.navlinks_navLinksGroup__3z19c {\n  display: flex;\n  justify-content: space-evenly;\n  width: 100%;\n  margin: 0;\n  padding: 0.5em 0;\n}\n\n.navlinks_navLinksGroupLeft__3Y0vP {\n  max-width: 400px;\n}\n\n.navlinks_navLinksGroupRight__3dmW3 {\n  max-width: 250px;\n  justify-self: flex-end;\n}\n\n.navlinks_navLink__wqu_N {\n  text-decoration: none;\n  color: var(--link-color);\n  transition: opacity 100ms ease-in;\n}\n.navlinks_navLink__wqu_N:hover {\n  opacity: 0.6;\n}\n\n.navlinks_navLink__wqu_N.navlinks_main__1Njey {\n  padding: 0 1em;\n  color: var(--background-color);\n  border: 1px solid var(--main-color);\n  background-color: var(--main-color);\n  border-radius: 3px;\n  transition: background-color 200ms ease-in;\n}\n.navlinks_navLink__wqu_N.navlinks_main__1Njey:hover {\n  background-color: var(--background-color);\n  color: var(--main-color);\n  transition: background-color 200ms ease-out;\n}\n\n@media (max-width: 768px) {\n  .navlinks_navLinks__1QLrV {\n    display: flex;\n    flex-direction: column;\n    position: fixed;\n    top: var(--height);\n    right: -999px;\n    bottom: 0;\n    width: var(--slider-width);\n    padding: 0 2em;\n    background-color: var(--background-color);\n    transition: right 300ms ease-in;\n    z-index: 100;\n  }\n\n  .navlinks_navLinksShow__3UZA- {\n    right: 0;\n    transition: right 300ms ease-out;\n  }\n\n  .navlinks_navLink__wqu_N {\n    font-size: 1em;\n    margin: 0.5em 0;\n  }\n\n  .navlinks_navLinksGroup__3z19c {\n    flex-direction: column;\n    align-items: flex-end;\n  }\n\n  .navlinks_navLinksGroupLeft__3Y0vP,\n  .navlinks_navLinksGroupRight__3dmW3 {\n    max-width: unset;\n    justify-self: unset;\n  }\n}\n";
var styles$2 = {"navLinks":"navlinks_navLinks__1QLrV","navLinksGroup":"navlinks_navLinksGroup__3z19c","navLinksGroupLeft":"navlinks_navLinksGroupLeft__3Y0vP navlinks_navLinksGroup__3z19c","navLinksGroupRight":"navlinks_navLinksGroupRight__3dmW3 navlinks_navLinksGroup__3z19c","navLink":"navlinks_navLink__wqu_N","main":"navlinks_main__1Njey","navLinksShow":"navlinks_navLinksShow__3UZA- navlinks_navLinks__1QLrV"};
styleInject(css$2);

var NavLink = function (_a) {
    var link = _a.link;
    return (createElement("a", { className: styles$2.navLink, href: link.to }, link.text));
};

var useNoScroll = function (shouldScroll) {
    return useEffect(function () {
        if (shouldScroll)
            document.body.style.overflow = 'hidden';
        else
            document.body.style.overflow = 'auto';
    }, [shouldScroll]);
};

var NavLinks = function (_a) {
    var isOpen = _a.isOpen, leftLinks = _a.leftLinks, rightLinks = _a.rightLinks;
    var className = isOpen ? 'navLinksShow' : 'navLinks';
    useNoScroll(isOpen);
    var renderLinks = function (links) {
        return links.map(function (link) { return createElement(NavLink, { key: link.to, link: link }); });
    };
    return (createElement("div", { className: styles$2[className] },
        createElement("span", { className: styles$2.navLinksGroupLeft }, renderLinks(leftLinks)),
        createElement("span", { className: styles$2.navLinksGroupRight }, renderLinks(rightLinks))));
};

var createContext$1 = createContext, useEffect$1 = useEffect;
var themeMapping = {
    mainColor: '--main-color',
    backgroundColor: '--background-color',
    shadowColor: '--shadow-color',
    linkColor: '--link-color',
    fontFamily: '--font-family',
    height: '--height',
    sliderWidth: '--slider-width',
    padding: '--padding'
};
var defaultTheme = {
    mainColor: '#333333',
    backgroundColor: '#ffffff',
    shadowColor: '#4e4e4e',
    linkColor: '#4e4e4e',
    height: '55px',
    sliderWidth: '70%',
    padding: '0 2em'
};
var ThemeContext = createContext$1(defaultTheme);
var useTheme = function (theme) {
    if (theme === void 0) { theme = defaultTheme; }
    return useEffect$1(function () {
        var nav = document.querySelector('nav');
        if (nav) {
            Object.keys(theme).forEach(function (prop) {
                nav.style.setProperty(themeMapping[prop], theme[prop]);
            });
        }
    }, []);
};

var useScrollSlide = function () {
    var pos = typeof window !== 'undefined' ? window.pageYOffset : 0;
    var _a = useState(false), isHidden = _a[0], setHidden = _a[1];
    var _b = useState(pos), prevPos = _b[0], setPrevPos = _b[1];
    useEffect(function () {
        var handleScroll = function () {
            var curPos = window.pageYOffset;
            var isScrollingDown = prevPos > curPos;
            isScrollingDown && isHidden && setHidden(false);
            !isScrollingDown && !isHidden && setHidden(true);
            setPrevPos(curPos);
        };
        window && window.addEventListener('scroll', handleScroll);
        return function () { return window.removeEventListener('scroll', handleScroll); };
    }, [prevPos]);
    return isHidden;
};

var css$3 = ".styles_nav__2rwxh {\n  display: flex;\n  align-items: center;\n  background-color: var(--background-color);\n  font-family: inherit;\n  height: var(--height);\n  padding: var(--padding);\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  transition: top 200ms ease-in;\n  z-index: 2;\n}\n\n.styles_navHidden__1KJ2w {\n  top: -55px;\n  transition: top 300ms ease-out;\n}\n\n@media (max-width: 768px) {\n  .styles_nav__2rwxh {\n    justify-content: space-between;\n  }\n}\n";
var styles$3 = {"nav":"styles_nav__2rwxh","navHidden":"styles_navHidden__1KJ2w styles_nav__2rwxh"};
styleInject(css$3);

var useState$1 = useState;
var Navbar = function (_a) {
    var brand = _a.brand, leftLinks = _a.leftLinks, rightLinks = _a.rightLinks, theme = _a.theme;
    var _b = useState$1(false), isToggled = _b[0], toggle = _b[1];
    var isHidden = useScrollSlide();
    useTheme(theme);
    var navClassName = isHidden ? 'navHidden' : 'nav';
    var onHamburgerClick = function () { return toggle(!isToggled); };
    return (createElement(ThemeContext.Provider, { value: defaultTheme },
        createElement("nav", { className: styles$3[navClassName], role: "navigation" },
            createElement(NavigationBrand, { route: "/", brand: brand }),
            createElement(Hamburger, { isToggled: isToggled, onToggle: onHamburgerClick }),
            createElement(NavLinks, { isOpen: isToggled, leftLinks: leftLinks, rightLinks: rightLinks }))));
};

export default Navbar;
//# sourceMappingURL=index.es.js.map
