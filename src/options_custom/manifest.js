this.manifest = {
    "name": "ChromeMute",
    "icon": "icon.png",
    "settings": [
        {
            "tab": i18n.get("information"),
            "group": i18n.get("website"),
            "name": "urlPattern",
            "type": "text",
            "label": i18n.get("urlPattern"),
            "text": i18n.get("urlPatternPlaceholder")
        },
        {
            "tab": i18n.get("information"),
            "group": i18n.get("website"),
            "name": "titleMutePattern",
            "type": "text",
            "label": i18n.get("titleMutePattern"),
            "text": i18n.get("titleMutePatternPlaceholder")
        },
        {
            "tab": i18n.get("information"),
            "group": i18n.get("website"),
            "name": "descTitleMute",
            "type": "description",
            "text": i18n.get("descTitleMute")
        },
    ],
    "alignment": [
        [
            "urlPattern",
            "titleMutePattern"
        ]
    ]
};
