import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const faqItems = [
    {
      question: "An Important question?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
    {
      question: "Another Important question?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
    {
      question: "Yet Another Important question?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
    {
      question: "A question that doesn't matter?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
    {
      question: "A question that doesn't matter?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
    {
      question: "A question that doesn't matter?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    }
   
  ];

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions page" />
      
      {faqItems.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography color={colors.greenAccent[500]} variant="h5" component="span">
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
