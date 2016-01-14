if (FML.isModLoaded("BiblioWoodsBoP") && BWBoP_enabled){
    NEI.override("BiblioWoodsBoP:*", [0]);
}

if (FML.isModLoaded("BiblioWoodsForestry") && BWForestry_enabled){
    NEI.override("BiblioWoodsForestry:*", [0]);
    NEI.hide("BiblioWoodsForestry:BiblioWoodFst*2");
    NEI.hide("BiblioWoodsForestry:BiblioWoodFstcase1");
    NEI.hide("BiblioWoodsForestry:BiblioWoodSeat2");
    NEI.hide("BiblioWoodsForestry:BiblioWoodMapFrame2");
    NEI.hide("BiblioWoodsForestry:BiblioWoodFancySign2");
    NEI.hide("BiblioWoodsForestry:BiblioWoodFancyWorkbench2");
    NEI.hide("BiblioWoodsForestry:BiblioWoodClock2");
    NEI.hide("BiblioWoodsForestry:BiblioWoodPaintingT*b");
}

if (FML.isModLoaded("BiblioWoodsNatura") && BWNatura_enabled){
    NEI.override("BiblioWoodsNatura:*", [0]);
}
