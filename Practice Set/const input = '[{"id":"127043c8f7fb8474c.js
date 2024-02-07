const input = '[{"id":"127043c8f7fb8474ca2cf1","zoneType":"CITY","subZones":[]},{"id":"1GhbdF5pkt8qg6QA46mnEu","zoneType":"CITY","subZones":[{"id":"37QlrdQd1IBoyjx8LaAJEl","zoneType":"TOWN","subZones":[]}]}]';


function parseInput(input) {
    const data = JSON.parse(input);
    let query = "SELECT town_name, city_name FROM order_item_level_insights_v2 WHERE ";
  
    data.forEach((zone, index) => {
      if (zone.subZones.length === 0) {
        query += `(city_id = '${zone.id}')`;
      } else {
        query += `(city_id = '${zone.id}' AND town_id IN (`;
        zone.subZones.forEach((subZone, subIndex) => {
          query += `'${subZone.id}'${subIndex === zone.subZones.length - 1 ? ")" : ", "}`;
        });
      }
      query += index === data.length - 1 ? "" : " OR ";
    });
  
    return query;
  }