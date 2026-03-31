(function () {
    function trackStoreClick(link, href) {
        if (typeof window.gtag !== "function") {
            return;
        }

        var text = (link.getAttribute("aria-label") || link.textContent || "").trim();
        var store = href.hostname === "play.google.com" ? "google_play" : "apple_app_store";

        window.gtag("event", "select_content", {
            content_type: "app_store_link",
            item_id: store,
            link_url: href.href,
            link_text: text,
            page_location: window.location.href,
            page_path: window.location.pathname
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

            if (isAppStore || isPlayStore) {
                trackStoreClick(link, href);
            }
        } catch (error) {
            return;
        }
    });
}());
