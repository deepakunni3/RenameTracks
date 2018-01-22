define([
           'dojo/_base/declare',
           'dojo/query',
           'JBrowse/Plugin'
       ],
       function(
           declare,
           query,
           JBrowsePlugin
       ) {
return declare( JBrowsePlugin,
{
    constructor: function( args ) {
        console.log("RenameTracks plugin starting");
        var browser = args.browser;

        if (!browser.config.trackMetadata) {
            return;
        }

        dojo.subscribe("/jbrowse/v1/c/tracks/show", function(data) {
            // everytime a track is shown, check for an alternateKey; if it exists then
            // replace track's key with the alternateKey
            for (var i = 0; i < data.length; i++) {
                var track = data[i];
                var label = track.label;
                var alternateKeyName = browser.config.trackMetadata.alternateKey ? browser.config.trackMetadata.alternateKey : "alternate_key";
                if (alternateKeyName) {
                    var trackMetadata = browser.trackMetaDataStore.getItem(label);
                    if (trackMetadata.hasOwnProperty(alternateKeyName)) {
                        var alternateKeyValue = trackMetadata[alternateKeyName];
                        if (alternateKeyValue) browser.trackConfigsByName[label].key = alternateKeyValue;
                    }
                }
            }
        });

    }
});
});
