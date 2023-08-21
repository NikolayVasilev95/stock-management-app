import React, { useEffect, useState } from "react";
import {
  MovementType,
  WarehouseByIdQuery,
  useWarehouseByIdQuery,
} from "../../graphql/generated/schema";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  LinearProgress,
  Typography,
  linearProgressClasses,
  styled,
} from "@mui/material";
import { WarehouseHistory } from "./WarehouseHistory";
import { CreateStockMovements } from "../StockMovements/CreateStockMovements";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

interface WarehouseProps {
  id: string;
}

export const Warehouse = ({ id }: WarehouseProps) => {
  const { data } = useWarehouseByIdQuery({
    variables: {
      warehouseByIdId: id,
    },
  });

  const [warehouse, setWarehouse] =
    useState<WarehouseByIdQuery["warehouseById"]>(null);

  useEffect(() => {
    if (data?.warehouseById) {
      setWarehouse(data.warehouseById);
    }
  }, [data]);

  const progressCalc = (
    size: number,
    amount: (number | undefined)[] | undefined
  ) => {
    let sum = 0;
    amount?.forEach((amount) => {
      sum += amount ?? 0;
    });
    return (sum / size) * 100;
  };

  return (
    <>
      {warehouse && (
        <Card>
          <CardHeader
            color="primary"
            title={`Warehouse: ${warehouse.name}`}
            subheader={
              <Grid container>
                <Grid item md={2} sm={12}>
                  <Typography variant="body2" color="text.secondary">
                    Stock space remaining:
                  </Typography>
                </Grid>
                <Grid item md={10} sm={12}>
                  <BorderLinearProgress
                    variant="determinate"
                    value={progressCalc(
                      warehouse.size,
                      warehouse.stock_movement
                        ?.filter(
                          (stock_movement) =>
                            stock_movement?.movement_type ===
                            MovementType.Inport
                        )
                        .map((stock_movement) => stock_movement?.amount)
                    )}
                  />
                </Grid>
              </Grid>
            }
          />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                {warehouse.stock_movement && (
                  <WarehouseHistory stock_movement={warehouse.stock_movement} />
                )}
              </Grid>
              <Grid item xs={6}>
                <CreateStockMovements warehouse_id={id} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
    </>
  );
};
