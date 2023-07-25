import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface EventCardProps {
  title: string;
  img: string;
  date: string;
}

export default function EventCard({ title, img, date }: EventCardProps) {
  return (
    <Card
      sx={{
        width: 300,
        margin: 1,
        backgroundColor: "skyblue",
        transition: "all 0.3s",
        "&:hover": {
          backgroundColor: "primary.main",
          transform: "translateY(-10px)",
        },
        cursor: "pointer",
      }}
    >
      <CardMedia component="img" height="200" image={`${img}`} alt={`${title}`} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ height: 80 }}>
          {title}
        </Typography>
        <Typography variant="body2">{date}</Typography>
      </CardContent>
    </Card>
  );
}
