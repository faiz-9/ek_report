const ejs = require('ejs');
const fs = require('fs');

const name = 'John Doe';

const constants = require('./variables/constants');
const images = require('./variables/base64_image_urls');
const graphDatas = require('./variables/graph_arrays');
const graph_arrays = require('./variables/graph_arrays');

fs.readFile('./variables/index.ejs', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  //   const html = ejs.render(data, { name });
  const html = ejs.render(data, {
    // PAGE 1 Images
    collaboration_image: images.collaboration_image,
    plus_image: images.plus_image,
    midas_image: images.midas_image,
    ekatvam_logo: images.ekatvam_logo,

    // PAGE 1 consts
    village: constants.name,
    current_month: constants.month,
    current_year: constants.year,
    current_season: constants.season,
    current_taluka: constants.taluka,

    //PAGE 2 Images
    humans: images.humans,
    cattle: images.cattle,
    sheep: images.sheep,
    poultry: images.poultry,
    temperature: images.temperature,
    wind_speed_img: images.wind_speed_img,
    page2_map: images.page2_map,

    // PAGE 2 consts
    village_population_humans: constants.total_human,
    village_population_cattle: constants.total_cattle,
    village_population_sheep: constants.total_sheep,
    village_population_poultry: constants.total_poultry,
    minimum_temperature: constants.temperature_min,
    maximum_temperature: constants.temperature_max,
    wind_speed: constants.wind_speed,
    area_under_village: constants.area,

    // page 2 graph values
    data_page_2: graphDatas.data_page_2,
    min_value: graphDatas.min_value,
    max_value: graphDatas.max_value,

    // page 3 images
    water_drop: images.water_drop,
    arrow: images.arrow,

    // page 3 consts
    rainfall_recieved: constants.current_rainfall_tcm,
    rainfall_till_now: constants.current_rainfall_tcm_cumulative,
    rainy_days: constants.current_rainy_day,
    total_rainwater: constants.total_rainwater,
    avg_village_rainfall: constants.average_rainfall_tcm,
    avg_rainy_days: constants.average_rainy_day,
    less_than: constants.less_than,
    more_than: constants.more_than,
    current_percentage_rainfall: constants.current_percentage_rainfall,

    //page 3 graph values
    current_year_rainfall: graph_arrays.current_year_rainfall,
    previous_year_rainfall: graph_arrays.previous_year_rainfall,
    avg_years_rainfall: graph_arrays.avg_years_rainfall,
    min: graph_arrays.min,
    max: graph_arrays.max,

    // page 4 images
    check_dam_img: images.check_dam_img,
    percolation_tank_img: images.percolation_tank_img,
    village_pond_img: images.village_pond_img,
    farm_pond_img: images.farm_pond_img,

    surface_body_locations_map_img: images.surface_body_locations_map_img,

    // page 4 consts
    total_runoff_generated: constants.runoff_tcm,
    surfacewaterbodies_filled: constants.surfacewaterbodies_filled,
    total_surfacewater: constants.total_surface_water_storage,
    check_dam: constants.total_check_dam,
    percolation_tank: constants.total_percolation_tank,
    village_pond: constants.total_village_pond,
    farm_pond: constants.total_farm_pond,

    // page 5 images
    obs_wells_img: images.obs_wells_img,
    map_img_page_5: images.map_img_page_5,

    // page 5 consts
    soil_moisture_groundwater: constants.total_soil_moisture,
    avg_water_level: constants.avg_water_level,
    obs_wells: constants.total_well,

    // page 6 images
    mango: images.mango,
    mango_gold: images.mango_gold,

    // page 6 consts
    water_consumed_by_crops: constants.crop_water_requirement,
    area_under_crops: constants.total_crop_area,
    map_values_kharif: constants.map_values_kharif,
    map_values_kharif_row2: constants.map_values_kharif_row2,
    map_values_kharif_row3: constants.map_values_kharif_row3,
    map_values_kharif_row4: constants.map_values_kharif_row4,
    map_values_rabi: constants.map_values_rabi,
    map_values_summer: constants.map_values_summer,

    // page 7 images
    humans_img: images.humans_img,
    cattle_img: images.cattle_img,
    sheep_img: images.sheep_img,
    poultry_img: images.poultry_img,
    industries_img: images.industries_img,

    // page 7 consts
    domestic_water_consumed: constants.total_domestic_water_comsumption,
    annual_consumption_village: constants.total_annual_water_comsumption,
    water_consumed_by_humans: constants.total_human_water_consumption,
    water_consumed_by_cattle: constants.total_cattle_water_consumption,
    water_consumed_by_sheep: constants.total_sheep_water_consumption,
    water_consumed_by_poultry: constants.total_poultry_water_consumption,
    water_consumed_by_industries: constants.total_industry_water_consumption,
    population_humans: constants.total_human,
    population_cattle: constants.total_cattle,
    population_sheep: constants.total_sheep,
    population_poultry: constants.total_poultry,
    population_industries: constants.total_industry,

    // page 8 images
    green_surfacewater_img: images.green_surfacewater_img,
    green_soilmoisture_img: images.green_soilmoisture_img,
    green_rainfall_img: images.green_rainfall_img,
    green_plus_img: images.green_plus_img,

    red_domestic_requirement_img: images.red_domestic_requirement_img,
    red_crop_requirement_img: images.red_crop_requirement_img,
    red_evaporation_img: images.red_evaporation_img,
    red_surface_runoff_img: images.red_surface_runoff_img,
    red_plus_img: images.red_plus_img,

    grey_surfacewater_img: images.grey_surfacewater_img,
    grey_soil_moisture_img: images.grey_soil_moisture_img,
    grey_rainfall_img: images.grey_rainfall_img,
    grey_plus_img: images.grey_plus_img,

    // page 8 consts
    supply_tcm: constants.supply_tcm,
    supply_surfacewater: constants.supply_surfacewater,
    supply_soilgroundwater: constants.supply_soilgroundwater,
    supply_rainfall: constants.supply_rainfall,

    demand_tcm: constants.demand_tcm,
    demand_domestic_requirement: constants.demand_domestic_requirement,
    demand_crop_requirement: constants.demand_crop_requirement,
    demand_evaporation: constants.demand_evaporation,
    demand_surface_runoff: constants.demand_surface_runoff,

    water_balance_tcm: constants.water_balance_tcm,
    water_balance_surfacewater: constants.water_balance_surfacewater,
    water_balance_soilgroundwater: constants.water_balance_soilgroundwater,
    water_balance_rainfall: constants.water_balance_rainfall,
  });

  fs.writeFile('index.html', html, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('HTML file created successfully');
  });
});
