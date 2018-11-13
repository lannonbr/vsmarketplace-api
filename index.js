const fetch = require("node-fetch");

/**
 * Grab an array of extensions from the VS Marketplace API
 * @param {string} query - the query string for the API call.
 */
module.exports = function(query) {
  let body = JSON.stringify({
    filters: [
      {
        criteria: [
          {
            // FilterType 8: Platform (VS, VS Code, Azure DevOps)
            filterType: 8,
            value: "Microsoft.VisualStudio.Code"
          },
          { filterType: 12, value: "4096" }, // Don't know what this is
          { filterType: 10, value: query } // FilterType 10: Query
        ],
        pageNumber: 1,
        pageSize: 8,
        sortBy: 0,
        sortOrder: 0
      }
    ],
    assetTypes: [],
    flags: 914 // No clue what this is used for
  });

  const url =
    "https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery?api-version=3.0-preview.1";

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json",
        "User-Agent":
          "VSMarketplace-API/1.0 (https://github.com/lannonbr/vsmarketplace-api)"
      }
    })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};
