export const STREETMAP_TILE_LAYER = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
export const STREETMAP_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

export const SATALLITEMAP_TILE_LAYER = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
export const SATALLITEMAP_ATTRIBUTION = 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';

export const WIKIMEDIAMAP_TILE_LAYER = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png';
export const WIKIMEDIA_ATTRIBUTION = '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>';

export enum ACTION {ADD, REMOVE, CLEAR, UPDATE_STYLE};