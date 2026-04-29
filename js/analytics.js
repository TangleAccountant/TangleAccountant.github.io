(function () {
    function getLinkText(link) {
        return (link.getAttribute("aria-label") || link.textContent || "").trim();
    }

    function sendTrackedEvent(eventName, eventData, callback) {
        var payload = {
            page_location: window.location.href,
            page_path: window.location.pathname,
            transport_type: "beacon"
        };

        if (typeof window.gtag !== "function") {
            if (typeof callback === "function") {
                callback();
            }
            return;
        }

        Object.keys(eventData).forEach(function (key) {
            payload[key] = eventData[key];
        });

        if (typeof callback === "function") {
            payload.event_callback = callback;
        }

        window.gtag("event", eventName, payload);
    }

    function normalizePath(pathname) {
        if (!pathname || pathname === "/") {
            return "/";
        }

        return pathname.replace(/\/+$/, "") + "/";
    }

    function ensurePostFiatNavLink() {
        var nav = document.querySelector("header nav");
        var currentPath = normalizePath(window.location.pathname);
        var link = null;

        if (!nav) {
            return;
        }

        Array.prototype.forEach.call(nav.querySelectorAll("a[href]"), function (candidate) {
            try {
                var candidateUrl = new URL(candidate.href, window.location.href);
                if (normalizePath(candidateUrl.pathname) === "/post-fiat/") {
                    link = candidate;
                }
            } catch (error) {
                return;
            }
        });

        if (!link) {
            link = document.createElement("a");
            link.href = "/post-fiat/";
            link.textContent = "Post Fiat";

            var blogLink = null;
            Array.prototype.forEach.call(nav.querySelectorAll("a[href]"), function (candidate) {
                try {
                    var candidateUrl = new URL(candidate.href, window.location.href);
                    if (normalizePath(candidateUrl.pathname) === "/blog/") {
                        blogLink = candidate;
                    }
                } catch (error) {
                    return;
                }
            });

            if (blogLink && blogLink.nextSibling) {
                nav.insertBefore(link, blogLink.nextSibling);
            } else if (blogLink) {
                nav.appendChild(link);
            } else {
                nav.appendChild(link);
            }
        }

        if (currentPath.indexOf("/post-fiat/") === 0) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }

        link.addEventListener("click", function () {
            nav.classList.remove("active");
        });
    }

    function getTrackedNavigation(href, link) {
        var normalizedPath = normalizePath(href.pathname);
        var destinationHost = href.hostname;
        var linkText = getLinkText(link);

        if (destinationHost === "apps.apple.com") {
            return {
                eventName: "app_store_click",
                eventData: {
                    destination_type: "app_store",
                    destination_host: destinationHost,
                    destination_path: href.pathname,
                    link_url: href.href,
                    link_text: linkText
                }
            };
        }

        if (destinationHost === "play.google.com" && href.pathname.indexOf("/store/apps") === 0) {
            return {
                eventName: "google_play_click",
                eventData: {
                    destination_type: "google_play",
                    destination_host: destinationHost,
                    destination_path: href.pathname,
                    link_url: href.href,
                    link_text: linkText
                }
            };
        }

        if (href.origin !== window.location.origin) {
            return null;
        }

        if (normalizedPath === "/support/zen-poke/") {
            return {
                eventName: "support_click",
                eventData: {
                    destination_type: "support",
                    destination_path: normalizedPath,
                    link_url: href.href,
                    link_text: linkText
                }
            };
        }

        if (normalizedPath === "/privacy/zen-poke/") {
            return {
                eventName: "privacy_click",
                eventData: {
                    destination_type: "privacy",
                    destination_path: normalizedPath,
                    link_url: href.href,
                    link_text: linkText
                }
            };
        }

        if (normalizedPath === "/zen-poke/faq/") {
            return {
                eventName: "faq_click",
                eventData: {
                    destination_type: "faq",
                    destination_path: normalizedPath,
                    link_url: href.href,
                    link_text: linkText
                }
            };
        }

        if (normalizedPath === "/post-fiat/") {
            return {
                eventName: "post_fiat_navigation_click",
                eventData: {
                    destination_type: "post_fiat_hub",
                    destination_path: normalizedPath,
                    link_url: href.href,
                    link_text: linkText
                }
            };
        }

        if (normalizedPath === "/post-fiat/tasks/") {
            return {
                eventName: "post_fiat_navigation_click",
                eventData: {
                    destination_type: "post_fiat_tasks",
                    destination_path: normalizedPath,
                    link_url: href.href,
                    link_text: linkText
                }
            };
        }

        if (normalizedPath.indexOf("/post-fiat/") === 0) {
            return {
                eventName: "post_fiat_navigation_click",
                eventData: {
                    destination_type: "post_fiat_page",
                    destination_path: normalizedPath,
                    link_url: href.href,
                    link_text: linkText
                }
            };
        }

        if (normalizedPath.indexOf("/zen-poke/") === 0) {
            return {
                eventName: "zen_poke_navigation_click",
                eventData: {
                    destination_type: "zen_poke_page",
                    destination_path: normalizedPath,
                    link_url: href.href,
                    link_text: linkText
                }
            };
        }

        return null;
    }

    ensurePostFiatNavLink();

    document.addEventListener("click", function (event) {
        var link = event.target.closest("a[href]");

        if (!link) {
            return;
        }

        try {
            var href = new URL(link.href, window.location.href);
            var opensNewTab = link.target === "_blank" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button === 1;
            var trackedNavigation = getTrackedNavigation(href, link);

            if (trackedNavigation) {
                if (opensNewTab) {
                    sendTrackedEvent(trackedNavigation.eventName, trackedNavigation.eventData);
                    return;
                }

                event.preventDefault();

                var navigated = false;
                var continueNavigation = function () {
                    if (navigated) {
                        return;
                    }
                    navigated = true;
                    window.location.href = href.href;
                };

                window.setTimeout(continueNavigation, 300);
                sendTrackedEvent(trackedNavigation.eventName, trackedNavigation.eventData, continueNavigation);
            }
        } catch (error) {
            return;
        }
    });
}());
