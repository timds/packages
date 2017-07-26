var c3 = {
  "version": {},
  "generate": function () {},
  "chart": {
    "fn": {
      "focus": function () {},
      "defocus": function () {},
      "revert": function () {},
      "show": function () {},
      "hide": function () {},
      "toggle": function () {},
      "zoom": function () {},
      "unzoom": function () {},
      "load": function () {},
      "unload": function () {},
      "flow": function () {},
      "selected": function () {},
      "select": function () {},
      "unselect": function () {},
      "transform": function () {},
      "groups": function () {},
      "xgrids": function () {},
      "ygrids": function () {},
      "regions": function () {},
      "data": function () {},
      "category": function () {},
      "categories": function () {},
      "color": function () {},
      "colors": function () {},
      "x": function () {},
      "xs": function () {},
      "axis": function () {},
      "legend": function () {},
      "resize": function () {},
      "flush": function () {},
      "destroy": function () {},
      "tooltip": function () {}
    },
    "internal": {
      "fn": {
        "init": function () {},
        "initParams": function () {},
        "initChartElements": function () {},
        "initWithData": function () {},
        "smoothLines": function () {},
        "updateSizes": function () {},
        "updateTargets": function () {},
        "showTargets": function () {},
        "redraw": function () {},
        "updateAndRedraw": function () {},
        "redrawWithoutRescale": function () {},
        "isTimeSeries": function () {},
        "isCategorized": function () {},
        "isCustomX": function () {},
        "isTimeSeriesY": function () {},
        "getTranslate": function () {},
        "initialOpacity": function () {},
        "initialOpacityForCircle": function () {},
        "opacityForCircle": function () {},
        "opacityForText": function () {},
        "xx": function () {},
        "xv": function () {},
        "yv": function () {},
        "subxx": function () {},
        "transformMain": function () {},
        "transformAll": function () {},
        "updateSvgSize": function () {},
        "updateDimension": function () {},
        "observeInserted": function () {},
        "generateResize": function () {},
        "endall": function () {},
        "generateWait": function () {},
        "parseDate": function () {},
        "getDefaultConfig": function () {},
        "additionalConfig": function () {},
        "loadConfig": function () {},
        "getScale": function () {},
        "getX": function () {},
        "getY": function () {},
        "getYScale": function () {},
        "getSubYScale": function () {},
        "updateScales": function () {},
        "getYDomainMin": function () {},
        "getYDomainMax": function () {},
        "getYDomain": function () {},
        "getXDomainMin": function () {},
        "getXDomainMax": function () {},
        "getXDomainPadding": function () {},
        "getXDomain": function () {},
        "updateXDomain": function () {},
        "trimXDomain": function () {},
        "isX": function () {},
        "isNotX": function () {},
        "getXKey": function () {},
        "getXValuesOfXKey": function () {},
        "getIndexByX": function () {},
        "getXValue": function () {},
        "getOtherTargetXs": function () {},
        "getOtherTargetX": function () {},
        "addXs": function () {},
        "hasMultipleX": function () {},
        "isMultipleX": function () {},
        "addName": function () {},
        "getValueOnIndex": function () {},
        "updateTargetX": function () {},
        "updateTargetXs": function () {},
        "generateTargetX": function () {},
        "cloneTarget": function () {},
        "updateXs": function () {},
        "getPrevX": function () {},
        "getNextX": function () {},
        "getMaxDataCount": function () {},
        "getMaxDataCountTarget": function () {},
        "getEdgeX": function () {},
        "mapToIds": function () {},
        "mapToTargetIds": function () {},
        "hasTarget": function () {},
        "isTargetToShow": function () {},
        "isLegendToShow": function () {},
        "filterTargetsToShow": function () {},
        "mapTargetsToUniqueXs": function () {},
        "addHiddenTargetIds": function () {},
        "removeHiddenTargetIds": function () {},
        "addHiddenLegendIds": function () {},
        "removeHiddenLegendIds": function () {},
        "getValuesAsIdKeyed": function () {},
        "checkValueInTargets": function () {},
        "hasNegativeValueInTargets": function () {},
        "hasPositiveValueInTargets": function () {},
        "isOrderDesc": function () {},
        "isOrderAsc": function () {},
        "orderTargets": function () {},
        "filterByX": function () {},
        "filterRemoveNull": function () {},
        "filterByXDomain": function () {},
        "hasDataLabel": function () {},
        "getDataLabelLength": function () {},
        "isNoneArc": function () {},
        "isArc": function () {},
        "findSameXOfValues": function () {},
        "findClosestFromTargets": function () {},
        "findClosest": function () {},
        "dist": function () {},
        "convertValuesToStep": function () {},
        "updateDataAttributes": function () {},
        "convertUrlToData": function () {},
        "convertXsvToData": function () {},
        "convertCsvToData": function () {},
        "convertTsvToData": function () {},
        "convertJsonToData": function () {},
        "convertRowsToData": function () {},
        "convertColumnsToData": function () {},
        "convertDataToTargets": function () {},
        "load": function () {},
        "loadFromArgs": function () {},
        "unload": function () {},
        "categoryName": function () {},
        "initEventRect": function () {},
        "redrawEventRect": function () {},
        "updateEventRect": function () {},
        "generateEventRectsForSingleX": function () {},
        "generateEventRectsForMultipleXs": function () {},
        "dispatchEvent": function () {},
        "getCurrentWidth": function () {},
        "getCurrentHeight": function () {},
        "getCurrentPaddingTop": function () {},
        "getCurrentPaddingBottom": function () {},
        "getCurrentPaddingLeft": function () {},
        "getCurrentPaddingRight": function () {},
        "getParentRectValue": function () {},
        "getParentWidth": function () {},
        "getParentHeight": function () {},
        "getSvgLeft": function () {},
        "getAxisWidthByAxisId": function () {},
        "getHorizontalAxisHeight": function () {},
        "getEventRectWidth": function () {},
        "getShapeIndices": function () {},
        "getShapeX": function () {},
        "getShapeY": function () {},
        "getShapeOffset": function () {},
        "isWithinShape": function () {},
        "getInterpolate": function () {},
        "initLine": function () {},
        "updateTargetsForLine": function () {},
        "updateLine": function () {},
        "redrawLine": function () {},
        "generateDrawLine": function () {},
        "generateGetLinePoints": function () {},
        "lineWithRegions": function () {},
        "updateArea": function () {},
        "redrawArea": function () {},
        "generateDrawArea": function () {},
        "getAreaBaseValue": function () {},
        "generateGetAreaPoints": function () {},
        "updateCircle": function () {},
        "redrawCircle": function () {},
        "circleX": function () {},
        "updateCircleY": function () {},
        "getCircles": function () {},
        "expandCircles": function () {},
        "unexpandCircles": function () {},
        "pointR": function () {},
        "pointExpandedR": function () {},
        "pointSelectR": function () {},
        "isWithinCircle": function () {},
        "isWithinStep": function () {},
        "initBar": function () {},
        "updateTargetsForBar": function () {},
        "updateBar": function () {},
        "redrawBar": function () {},
        "getBarW": function () {},
        "getBars": function () {},
        "expandBars": function () {},
        "unexpandBars": function () {},
        "generateDrawBar": function () {},
        "generateGetBarPoints": function () {},
        "isWithinBar": function () {},
        "initText": function () {},
        "updateTargetsForText": function () {},
        "updateText": function () {},
        "redrawText": function () {},
        "getTextRect": function () {},
        "generateXYForText": function () {},
        "getXForText": function () {},
        "getYForText": function () {},
        "setTargetType": function () {},
        "hasType": function () {},
        "hasArcType": function () {},
        "isLineType": function () {},
        "isStepType": function () {},
        "isSplineType": function () {},
        "isAreaType": function () {},
        "isBarType": function () {},
        "isScatterType": function () {},
        "isPieType": function () {},
        "isGaugeType": function () {},
        "isDonutType": function () {},
        "isArcType": function () {},
        "lineData": function () {},
        "arcData": function () {},
        "barData": function () {},
        "lineOrScatterData": function () {},
        "barOrLineData": function () {},
        "initGrid": function () {},
        "initGridLines": function () {},
        "updateXGrid": function () {},
        "updateYGrid": function () {},
        "updateGrid": function () {},
        "redrawGrid": function () {},
        "showXGridFocus": function () {},
        "hideXGridFocus": function () {},
        "updateXgridFocus": function () {},
        "generateGridData": function () {},
        "getGridFilterToRemove": function () {},
        "removeGridLines": function () {},
        "initTooltip": function () {},
        "getTooltipContent": function () {},
        "tooltipPosition": function () {},
        "showTooltip": function () {},
        "hideTooltip": function () {},
        "initLegend": function () {},
        "updateLegendWithDefaults": function () {},
        "updateSizeForLegend": function () {},
        "transformLegend": function () {},
        "updateLegendStep": function () {},
        "updateLegendItemWidth": function () {},
        "updateLegendItemHeight": function () {},
        "getLegendWidth": function () {},
        "getLegendHeight": function () {},
        "opacityForLegend": function () {},
        "opacityForUnfocusedLegend": function () {},
        "toggleFocusLegend": function () {},
        "revertLegend": function () {},
        "showLegend": function () {},
        "hideLegend": function () {},
        "clearLegendItemTextBoxCache": function () {},
        "updateLegend": function () {},
        "initAxis": function () {},
        "getXAxis": function () {},
        "updateXAxisTickValues": function () {},
        "getYAxis": function () {},
        "getAxisId": function () {},
        "getXAxisTickFormat": function () {},
        "getAxisTickValues": function () {},
        "getXAxisTickValues": function () {},
        "getYAxisTickValues": function () {},
        "getY2AxisTickValues": function () {},
        "getAxisLabelOptionByAxisId": function () {},
        "getAxisLabelText": function () {},
        "setAxisLabelText": function () {},
        "getAxisLabelPosition": function () {},
        "getXAxisLabelPosition": function () {},
        "getYAxisLabelPosition": function () {},
        "getY2AxisLabelPosition": function () {},
        "getAxisLabelPositionById": function () {},
        "textForXAxisLabel": function () {},
        "textForYAxisLabel": function () {},
        "textForY2AxisLabel": function () {},
        "xForAxisLabel": function () {},
        "dxForAxisLabel": function () {},
        "textAnchorForAxisLabel": function () {},
        "xForXAxisLabel": function () {},
        "xForYAxisLabel": function () {},
        "xForY2AxisLabel": function () {},
        "dxForXAxisLabel": function () {},
        "dxForYAxisLabel": function () {},
        "dxForY2AxisLabel": function () {},
        "dyForXAxisLabel": function () {},
        "dyForYAxisLabel": function () {},
        "dyForY2AxisLabel": function () {},
        "textAnchorForXAxisLabel": function () {},
        "textAnchorForYAxisLabel": function () {},
        "textAnchorForY2AxisLabel": function () {},
        "xForRotatedTickText": function () {},
        "yForRotatedTickText": function () {},
        "rotateTickText": function () {},
        "getMaxTickWidth": function () {},
        "updateAxisLabels": function () {},
        "getAxisPadding": function () {},
        "convertPixelsToAxisPadding": function () {},
        "generateTickValues": function () {},
        "generateAxisTransitions": function () {},
        "redrawAxis": function () {},
        "getClipPath": function () {},
        "appendClip": function () {},
        "getAxisClipX": function () {},
        "getAxisClipY": function () {},
        "getXAxisClipX": function () {},
        "getXAxisClipY": function () {},
        "getYAxisClipX": function () {},
        "getYAxisClipY": function () {},
        "getAxisClipWidth": function () {},
        "getAxisClipHeight": function () {},
        "getXAxisClipWidth": function () {},
        "getXAxisClipHeight": function () {},
        "getYAxisClipWidth": function () {},
        "getYAxisClipHeight": function () {},
        "initPie": function () {},
        "updateRadius": function () {},
        "updateArc": function () {},
        "updateAngle": function () {},
        "getSvgArc": function () {},
        "getSvgArcExpanded": function () {},
        "getArc": function () {},
        "transformForArcLabel": function () {},
        "getArcRatio": function () {},
        "convertToArcData": function () {},
        "textForArcLabel": function () {},
        "expandArc": function () {},
        "unexpandArc": function () {},
        "shouldExpand": function () {},
        "shouldShowArcLabel": function () {},
        "meetsArcLabelThreshold": function () {},
        "getArcLabelFormat": function () {},
        "getArcTitle": function () {},
        "updateTargetsForArc": function () {},
        "initArc": function () {},
        "redrawArc": function () {},
        "initGauge": function () {},
        "getGaugeLabelHeight": function () {},
        "initRegion": function () {},
        "updateRegion": function () {},
        "redrawRegion": function () {},
        "regionX": function () {},
        "regionY": function () {},
        "regionWidth": function () {},
        "regionHeight": function () {},
        "isRegionOnX": function () {},
        "drag": function () {},
        "dragstart": function () {},
        "dragend": function () {},
        "selectPoint": function () {},
        "unselectPoint": function () {},
        "togglePoint": function () {},
        "selectPath": function () {},
        "unselectPath": function () {},
        "togglePath": function () {},
        "getToggle": function () {},
        "toggleShape": function () {},
        "initBrush": function () {},
        "initSubchart": function () {},
        "updateTargetsForSubchart": function () {},
        "updateBarForSubchart": function () {},
        "redrawBarForSubchart": function () {},
        "updateLineForSubchart": function () {},
        "redrawLineForSubchart": function () {},
        "updateAreaForSubchart": function () {},
        "redrawAreaForSubchart": function () {},
        "redrawSubchart": function () {},
        "redrawForBrush": function () {},
        "transformContext": function () {},
        "getDefaultExtent": function () {},
        "initZoom": function () {},
        "updateZoom": function () {},
        "redrawForZoom": function () {},
        "generateColor": function () {},
        "generateLevelColor": function () {},
        "getYFormat": function () {},
        "yFormat": function () {},
        "y2Format": function () {},
        "defaultValueFormat": function () {},
        "defaultArcValueFormat": function () {},
        "dataLabelFormat": function () {},
        "hasCaches": function () {},
        "addCache": function () {},
        "getCaches": function () {},
        "CLASS": {
          "target": {},
          "chart": {},
          "chartLine": {},
          "chartLines": {},
          "chartBar": {},
          "chartBars": {},
          "chartText": {},
          "chartTexts": {},
          "chartArc": {},
          "chartArcs": {},
          "chartArcsTitle": {},
          "chartArcsBackground": {},
          "chartArcsGaugeUnit": {},
          "chartArcsGaugeMax": {},
          "chartArcsGaugeMin": {},
          "selectedCircle": {},
          "selectedCircles": {},
          "eventRect": {},
          "eventRects": {},
          "eventRectsSingle": {},
          "eventRectsMultiple": {},
          "zoomRect": {},
          "brush": {},
          "focused": {},
          "defocused": {},
          "region": {},
          "regions": {},
          "tooltipContainer": {},
          "tooltip": {},
          "tooltipName": {},
          "shape": {},
          "shapes": {},
          "line": {},
          "lines": {},
          "bar": {},
          "bars": {},
          "circle": {},
          "circles": {},
          "arc": {},
          "arcs": {},
          "area": {},
          "areas": {},
          "empty": {},
          "text": {},
          "texts": {},
          "gaugeValue": {},
          "grid": {},
          "gridLines": {},
          "xgrid": {},
          "xgrids": {},
          "xgridLine": {},
          "xgridLines": {},
          "xgridFocus": {},
          "ygrid": {},
          "ygrids": {},
          "ygridLine": {},
          "ygridLines": {},
          "axis": {},
          "axisX": {},
          "axisXLabel": {},
          "axisY": {},
          "axisYLabel": {},
          "axisY2": {},
          "axisY2Label": {},
          "legendBackground": {},
          "legendItem": {},
          "legendItemEvent": {},
          "legendItemTile": {},
          "legendItemHidden": {},
          "legendItemFocused": {},
          "dragarea": {},
          "EXPANDED": {},
          "SELECTED": {},
          "INCLUDED": {}
        },
        "generateClass": function () {},
        "classText": function () {},
        "classTexts": function () {},
        "classShape": function () {},
        "classShapes": function () {},
        "classLine": function () {},
        "classLines": function () {},
        "classCircle": function () {},
        "classCircles": function () {},
        "classBar": function () {},
        "classBars": function () {},
        "classArc": function () {},
        "classArcs": function () {},
        "classArea": function () {},
        "classAreas": function () {},
        "classRegion": function () {},
        "classEvent": function () {},
        "classTarget": function () {},
        "classFocus": function () {},
        "classFocused": function () {},
        "classDefocused": function () {},
        "classChartText": function () {},
        "classChartLine": function () {},
        "classChartBar": function () {},
        "classChartArc": function () {},
        "getTargetSelectorSuffix": function () {},
        "selectorTarget": function () {},
        "selectorTargets": function () {},
        "selectorLegend": function () {},
        "selectorLegends": function () {},
        "isValue": function () {},
        "isFunction": function () {},
        "isString": function () {},
        "isUndefined": function () {},
        "isDefined": function () {},
        "ceil10": function () {},
        "asHalfPixel": function () {},
        "diffDomain": function () {},
        "isEmpty": function () {},
        "notEmpty": function () {},
        "getOption": function () {},
        "hasValue": function () {},
        "getPathBox": function () {},
        "generateFlow": function () {},
        "transformTo": function () {}
      }
    }
  }
};