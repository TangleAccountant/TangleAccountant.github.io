(function () {
    function sendStoreClick(link, href, callback) {
        var text = (link.getAttribute("aria-label") || link.textContent || "").trim();
        var store = href.hostname === "play.google.com" ? "google_play" : "apple_app_store";

        if (typeof window.gtag !== "function") {
            if (typeof callback === "function") {
                callback();
            }
            return;
        }

        window.gtag("event", "select_content", {
            content_type: "app_store_link",
            item_id: store,
            link_url: href.href,
            link_text: text,
            page_location: window.location.href,
            page_path: window.location.pathname,
            transport_type: "beacon",
            event_callback: callback
        });
    }

    document.addEventListener("click", function (event) {
        var link = event.target.closest("a[href]");

        if (!link) {
            return;
        }

        try {
            var href = new URL(link.href, window.location.href);
            var isAppStore = href.hostname === "apps.apple.com";
            var isPlayStore = href.hostname === "play.google.com" && href.pathname.indexOf("/store/apps") === 0;
            var opensNewTab = link.target === "_blank" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button === 1;

            if (isAppStore || isPlayStore) {
                if (opensNewTab) {
                    sendStoreClick(link, href);
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
                sendStoreClick(link, href, continueNavigation);
            }
        } catch (error) {
            return;
        }
    });
}());
