import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import data from "../data.json";
import { Box, Container } from "@mui/material";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { toggleBtn, clearBtns } from "../redux/filter";
import { useMemo } from "react";

export default function CardList() {
  const dispatch = useDispatch();
  const selected = useSelector((s) => s.buttons);

  const filtered = useMemo(() => {
    return data.filter((items) => {
      const tags = [items.role, items.level, ...(items.languages || [])];
      return selected.length === 0 || selected.every((t) => tags.includes(t));
    });
  }, [selected]);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          px: 3,
          mt: 2,
          justifyContent: "center",
        }}
      >
        {selected.map((t) => (
          <Button
            key={t}
            variant="contained"
            sx={{
              backgroundColor: "#dff3f0",
              color: "#009073",
              fontWeight: "bold",
              height: 30,
              "&:hover": { backgroundColor: "#009073", color: "#dff3f0" },
            }}
            onClick={() => dispatch(toggleBtn(t))}
          >
            {t}
          </Button>
        ))}
        {selected.length > 0 && (
          <Button
            variant="text"
            color="error"
            onClick={() => dispatch(clearBtns())}
          >
            Clear
          </Button>
        )}
      </Box>

      <Box>
        {filtered.map((items) => {
          const id = uuid();
          return (
            <Card
              sx={{
                maxWidth: { sm: "100%", xs: "100%", md: "100%", lg: "100%" },
                p: { xs: 1.5, md: 2 },
                mx: { xs: 1.5, md: 3 },
                margin: "30px",
                display: "flex",
                alignItems: { xs: "flex-start", md: "center" },
                justifyContent: { xs: "flex-start", md: "space-between" },
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 1.5, md: 2 },
              }}
              key={id}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  image={items.logo}
                  sx={{ borderRadius: "100%", width: "70px", height: "70px" }}
                />
                <CardContent>
                  <Box sx={{ display: "flex", gap: "8px" }}>
                    <Typography
                      variant="body2"
                      fontWeight={570}
                      component="p"
                      color="#009073"
                    >
                      {items.company}
                    </Typography>
                    {items.new && (
                      <Typography
                        variant="body2"
                        fontWeight={570}
                        component="p"
                        color="#ffffffff"
                        sx={{
                          backgroundColor: "#009073",
                          padding: "0 10px ",
                          borderRadius: "10px 10px ",
                        }}
                      >
                        New!
                      </Typography>
                    )}
                    {items.featured && (
                      <Typography
                        variant="body2"
                        fontWeight={570}
                        component="p"
                        color="#ffffffff"
                        sx={{
                          backgroundColor: "#000000ff",
                          padding: "0 10px ",
                          borderRadius: "10px 10px ",
                        }}
                      >
                        Featured
                      </Typography>
                    )}
                  </Box>
                  <Box>
                    <Typography
                      gutterBottom
                      variant="body1"
                      component="p"
                      sx={{ fontWeight: "bold" }}
                    >
                      {items.position}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: { ms: "flex" },
                      gap: "8px",
                    }}
                  >
                    <Typography
                      variant="caption"
                      fontWeight={"bold"}
                    >{`${items.postedAt}  .`}</Typography>
                    <Typography variant="caption" fontWeight={"bold"}>
                      {`${items.contract} .`}
                    </Typography>
                    <Typography variant="caption" fontWeight={"bold"}>
                      {items.location}
                    </Typography>
                  </Box>
                </CardContent>
              </Box>
              <Box>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{
                      backgroundColor: "#dff3f0",
                      color: "#009073",
                      fontWeight: "bold",
                      height: 30,
                      justifyContent: "center",
                      "&:hover": {
                        backgroundColor: "#009073",
                        color: "#dff3f0",
                      },
                    }}
                    onClick={() => dispatch(toggleBtn(items.role))}
                  >
                    {items.role}
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{
                      backgroundColor: "#dff3f0",
                      color: "#009073",
                      fontWeight: "bold",
                      height: 30,
                      justifyContent: "center",
                      "&:hover": {
                        backgroundColor: "#009073",
                        color: "#dff3f0",
                      },
                    }}
                    onClick={() => dispatch(toggleBtn(items.level))}
                  >
                    {items.level}
                  </Button>
                  <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    {items.languages.map((item, i) => {
                      return (
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#dff3f0",
                            color: "#009073",
                            fontWeight: "bold",
                            height: 30,
                            justifyContent: "center",
                            "&:hover": {
                              backgroundColor: "#009073",
                              color: "#dff3f0",
                            },
                          }}
                          key={i}
                          onClick={() => dispatch(toggleBtn(item))}
                        >
                          {item}
                        </Button>
                      );
                    })}
                  </Box>
                </CardActions>
              </Box>
            </Card>
          );
        })}
      </Box>
    </Container>
  );
}
