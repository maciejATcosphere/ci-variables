
define(['jquery'], function ($) {

    var TableView = function (values, $el) {
        this.$el = $el;
        this.$el.html('');
        this.domCache = this.initilize(values);
    };


    TableView.prototype.initilize = function (values) {
        var cache = {table: {}, colsHeaders: [], rowsHeaders: []},
            $row, $cell, i, j, len = values.length;

        $row = $('<tr></tr>');
        for (i = -1; i < len; i++) {
            $cell = $('<td></td>').addClass('header-cell');

            if (i >= 0) {
                $cell.text(values[i]);
                cache.colsHeaders.push($cell);
            }
            $row.append($cell);
        }

        this.$el.append($row);

        for (i = 0; i < len; i++) {
            cache.table[i] = {};

            $row = $('<tr></tr>');
            $cell = $('<td></td>').addClass('header-cell').text(values[i]);
            cache.rowsHeaders.push($cell);
            $row.append($cell);

            for (j = 0; j < len; j++) {

                $cell = $('<td></td>')
                    .addClass('app-cell')
                    .data('rowIdx', i)
                    .data('colIdx', j);

                cache.table[i][j] = $cell;
                $cell.html(values[i] * values[j]);
                $row.append($cell);
            }

            this.$el.append($row);
        }

        return cache;
    };


    TableView.prototype.update = function (values) {
        var i, j, len = values.length;

        for (i = 0; i < len; i++) {
            this.domCache.rowsHeaders[i].html(values[i]);
            this.domCache.colsHeaders[i].html(values[i]);
            for (j = 0; j < len; j++) {
                this.domCache.table[i][j].html(values[i] * values[j]);
            }
        }
    };


    return {TableView: TableView};
});


