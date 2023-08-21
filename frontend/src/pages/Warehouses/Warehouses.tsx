import React, { useEffect, useState } from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import {
  WarehousesQuery,
  useWarehousesQuery,
} from "../../graphql/generated/schema";
import { Warehouse } from "../../components/Warehouses/Warehouse";

export const Warehouses = () => {
  const { data } = useWarehousesQuery();
  const [warehouses, setWarehouses] = useState<
    WarehousesQuery["warehouses"] | null
  >([]);
  const [selectedWarehouseId, setSelectedWarehouseId] = useState("");

  useEffect(() => {
    if (data?.warehouses) {
      setWarehouses(data.warehouses);
    }
  }, [data]);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedWarehouseId(event.target.value);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h2" component="h2">
          Warehouse Stock Movement
        </Typography>
      </Grid>
      <Grid container item xs={12} spacing={2}>
        <Grid item xs={4}>
          <FormControl variant="standard" sx={{ m: 1, width: "70%" }}>
            <InputLabel id="warehouse-stock-movement-label">
              Select Warehouse:
            </InputLabel>
            <Select
              labelId="warehouse-stock-movement-label"
              id="warehouse-stock-movement"
              value={selectedWarehouseId}
              onChange={handleChange}
              label="Select Warehouse"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {warehouses?.map((warehouse) => (
                <MenuItem key={warehouse?.id} value={warehouse?.id}>
                  {warehouse?.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={8}>
          {selectedWarehouseId && <Warehouse id={selectedWarehouseId} />}
        </Grid>
      </Grid>
    </Grid>
  );
};
