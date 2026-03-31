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
