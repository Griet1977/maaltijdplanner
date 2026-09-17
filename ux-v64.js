(function () {
  "use strict";

  var saved = { windowX: 0, windowY: 0, tableX: 0, tableY: 0 };
  var restoreNeeded = false;
  var applying = false;

  function rememberPosition() {
    var box = document.querySelector(".presence");
    saved.windowX = window.scrollX || 0;
    saved.windowY = window.scrollY || 0;
    saved.tableX = box ? box.scrollLeft : 0;
    saved.tableY = box ? box.scrollTop : 0;
    restoreNeeded = true;
  }

  function rowsOf(table) {
    return Array.prototype.slice.call(table.querySelectorAll("tr")).filter(function (row) {
      return row.querySelector("td");
    });
  }

  function rowName(row) {
    var first = row.querySelector("td:first-child");
    return first ? first.textContent.trim() : "";
  }

  function stabilizePresenceTable() {
    if (applying) return;
    var table = document.querySelector(".ptable");
    if (!table) return;

    var rows = rowsOf(table);
    if (!rows.length) return;

    applying = true;
    try {
      var ownRow = rows.find(function (row) {
        return row.querySelector("button[data-pres]");
      });

      var otherRows = rows.filter(function (row) {
        return row !== ownRow;
      }).sort(function (a, b) {
        return rowName(a).localeCompare(rowName(b), "nl", { sensitivity: "base" });
      });

      var target = rows[0].parentNode;
      if (ownRow) {
        ownRow.classList.add("v64-current-user");
        target.appendChild(ownRow);
      }
      otherRows.forEach(function (row) {
        row.classList.remove("v64-current-user");
        target.appendChild(row);
      });

      if (restoreNeeded) {
        requestAnimationFrame(function () {
          var box = document.querySelector(".presence");
          if (box) {
            box.scrollLeft = saved.tableX;
            box.scrollTop = saved.tableY;
          }
          window.scrollTo(saved.windowX, saved.windowY);
          restoreNeeded = false;
        });
      }
    } finally {
      applying = false;
    }
  }

  document.addEventListener("pointerdown", function (event) {
    if (event.target.closest("button[data-pres]")) rememberPosition();
  }, true);

  document.addEventListener("keydown", function (event) {
    if ((event.key === "Enter" || event.key === " ") && event.target.closest("button[data-pres]")) {
      rememberPosition();
    }
  }, true);

  var observer = new MutationObserver(function () {
    stabilizePresenceTable();
  });

  function start() {
    var app = document.getElementById("app");
    if (!app) return;
    observer.observe(app, { childList: true, subtree: true });
    stabilizePresenceTable();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
