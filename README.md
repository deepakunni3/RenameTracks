# RenameTracks

A simple JBrowse plugin that renames the key of a displayed track to a value from track metadata

### Configuration

In your `trackList.json`, add the following:
```json
"trackMetadata" : {
  "sources" : [
     {
        "url" : "data/trackMetadata.csv",
        "type" : "csv"
     }
  ],
  "alternateKey" : "column_name"
}
```

The `alternateKey` attribute tells the plugin which column to read from `trackMetadata.csv`.

### Example

If your `trackMetadata.csv` has a column named `short_name`:
```
key,label,short_name
"Gene Prediction Track from NCBI RefSeq",gene_prediction_track_from_ncbi_refseq,"NCBI RefSeq"
"Gene Prediction Track from Ensembl 91",gene_prediction_track_from_ensembl_91,"Ensembl 91"
```

Then add the following to `trackList.json`:
```
"trackMetadata" : {
  "sources" : [
     {
        "url" : "data/trackMetadata.csv",
        "type" : "csv"
     }
  ],
  "alternateKey" : "short_name"
}
```

In this example, alternate key for each track is read from the `short_name` column.


