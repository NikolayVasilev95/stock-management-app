import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { MovementType } from "../../graphql/generated/schema";

function dateFormatter(date: string) {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString();
}

function dateRangeFormatter(dates: string[]) {
  if (dates.length === 0) {
    return null;
  }
  const datesObj = dates
    .map((date) => new Date(date))
    .filter((date) => !isNaN(date.getTime()))
    .map((date) => date.getTime());
  const minDate = new Date(Math.min.apply(null, datesObj));
  const maxDate = new Date(Math.max.apply(null, datesObj));
  return `${minDate.toLocaleDateString()} - ${maxDate.toLocaleDateString()}`;
}

interface Panels {
  expand: string;
  text: string;
  type: MovementType;
  data: ({
    __typename?: "StockMovement" | undefined;
    movement_id: string;
    amount: number;
    movement_date: any;
    movement_type: MovementType;
  } | null)[];
}

interface WarehouseHistoryProps {
  stock_movement?: ({
    __typename?: "StockMovement" | undefined;
    movement_id: string;
    amount: number;
    movement_date: any;
    movement_type: MovementType;
  } | null)[];
}

export const WarehouseHistory = ({ stock_movement }: WarehouseHistoryProps) => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [panels, setPanels] = useState<Panels[]>([
    {
      expand: "export-panel",
      text: "Export",
      type: MovementType.Export,
      data: [],
    },
    {
      expand: "import-panel",
      text: "Import",
      type: MovementType.Inport,
      data: [],
    },
  ]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  useEffect(() => {
    if (stock_movement) {
      setPanels((prevPanels) =>
        prevPanels.map((pan) => ({
          ...pan,
          data: stock_movement.filter(
            (movement) => movement?.movement_type === pan.type
          ),
        }))
      );
    }
  }, [stock_movement]);

  return (
    <>
      {panels.map(({ expand, text, data }) => (
        <Accordion
          key={expand}
          expanded={expanded === expand}
          onChange={handleChange(expand)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${expand}-content`}
            id={`${expand}-header`}
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>{text}</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {dateRangeFormatter(data.map((el) => el?.movement_date)) ?? "N/A"}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List sx={{ height: "165px", overflow: "auto" }}>
              {data.map((item) => (
                <ListItem key={item?.movement_id}>
                  <ListItemAvatar>
                    <Avatar>
                      <LocalShippingIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={`Date: ${dateFormatter(item?.movement_date)}`}
                    secondary={`Amount: ${item?.amount}`}
                  />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};
