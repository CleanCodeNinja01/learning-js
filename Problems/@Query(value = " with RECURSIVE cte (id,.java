  @Query(value = " with RECURSIVE cte (id, name,type, parentZoneId,status, createdAt, createdBy, updatedAt, updatedBy, locationPolygonText,level) as" +
            "( select id, name, type, parent_zone_id, status, created_at, created_by, updated_at, updated_by, location_polygon_as_text,1 as level from zone" +
            " where parent_zone_id = :parentZoneId" + " AND status = com.bazaar.api.zone.constant.ZoneStatus.ACTIVE " +
            " union all select p.id, p.name, p.type, p.parent_zone_id,p.status, p.created_at, p.created_by, p.updated_at, p.updated_by,p.location_polygon_as_text,level+1 from zone p inner join cte on p.parent_zone_id = cte.id ) select * from cte order by level", nativeQuery = true)
    List<ZoneProjection> findChildZonesWithHierarchy(String parentZoneId);