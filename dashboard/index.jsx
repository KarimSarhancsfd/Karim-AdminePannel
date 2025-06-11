import React, { useState, useEffect } from 'react';
import { Box, Button, IconButton, Typography, useTheme, CircularProgress, useMediaQuery } from '@mui/material';
import { tokens } from '../../theme';
import { mockTransactions } from '../../data/mockData';
import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic
} from '@mui/icons-material';
import Header from '../../components/Header';
import LineChart from '../../components/LineChart';
import GeographyChart from '../../components/GeographyChart';
import BarChart from '../../components/BarChart';
import StatBox from '../../components/StatBox';
import ProgressCircle from '../../components/ProgressCircle';

export default function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        height="100vh"
        sx={{ 
          background: `linear-gradient(135deg, ${colors.primary[400]} 0%, ${colors.blueAccent[900]} 100%)`
        }}
      >
        <CircularProgress 
          size={80} 
          thickness={4}
          sx={{ 
            color: colors.greenAccent[500],
            filter: `drop-shadow(0 0 8px ${colors.greenAccent[500]}50)`
          }} 
        />
      </Box>
    );
  }

  const statBoxes = [
    {
      title: '12,361',
      subtitle: 'Emails Sent',
      progress: 0.75,
      increase: '+14%',
      icon: <Email sx={{ color: colors.greenAccent[500], fontSize: '28px' }} />
    },
    {
      title: '431,225',
      subtitle: 'Sales Obtained',
      progress: 0.5,
      increase: '+21%',
      icon: <PointOfSale sx={{ color: colors.greenAccent[500], fontSize: '28px' }} />
    },
    {
      title: '32,441',
      subtitle: 'New Clients',
      progress: 0.3,
      increase: '+5%',
      icon: <PersonAdd sx={{ color: colors.greenAccent[500], fontSize: '28px' }} />
    },
    {
      title: '1,325,134',
      subtitle: 'Traffic Received',
      progress: 0.8,
      increase: '+43%',
      icon: <Traffic sx={{ color: colors.greenAccent[500], fontSize: '28px' }} />
    }
  ];

  return (
    <Box m="20px" sx={{ background: colors.primary[900], minHeight: '100vh' }}>
      <Box 
        display="flex" 
        justifyContent="space-between" 
        alignItems="center" 
        mb="30px"
        flexWrap="wrap"
        gap={2}
      >
        <Header title="DASHBOARD" subtitle="Welcome to your analytics dashboard" />
        <Button
          variant="contained"
          startIcon={<DownloadOutlined />}
          sx={{
            background: `linear-gradient(45deg, ${colors.blueAccent[600]} 0%, ${colors.blueAccent[700]} 100%)`,
            color: colors.grey[100],
            fontSize: '14px',
            fontWeight: 'bold',
            padding: '12px 24px',
            borderRadius: '8px',
            boxShadow: `0 4px 12px ${colors.blueAccent[500]}30`,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: `0 6px 16px ${colors.blueAccent[500]}50`,
              background: `linear-gradient(45deg, ${colors.blueAccent[700]} 0%, ${colors.blueAccent[800]} 100%)`,
            }
          }}
          aria-label="Download reports"
        >
          Download Reports
        </Button>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns={isNonMobile ? "repeat(12, 1fr)" : "1fr"}
        gridAutoRows={isNonMobile ? "minmax(180px, auto)" : "minmax(140px, auto)"}
        gap="20px"
      >
        {statBoxes.map((box, index) => (
          <Box
            key={`statbox-${index}`}
            gridColumn={isNonMobile ? "span 3" : "span 12"}
            sx={{
              background: `linear-gradient(145deg, ${colors.primary[500]}, ${colors.primary[400]})`,
              borderRadius: '12px',
              p: '20px',
              boxShadow: `0 4px 20px ${colors.primary[900]}30`,
              border: `1px solid ${colors.primary[300]}`,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: `0 8px 24px ${colors.primary[900]}50`,
              }
            }}
          >
            <StatBox {...box} />
          </Box>
        ))}

        {/* Revenue Chart */}
        <Box
          gridColumn={isNonMobile ? "span 8" : "span 12"}
          gridRow="span 2"
          sx={{
            background: colors.primary[400],
            borderRadius: '12px',
            p: '20px',
            boxShadow: `0 4px 20px ${colors.primary[900]}30`,
            border: `1px solid ${colors.primary[300]}`,
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="20px"
          >
            <Box>
              <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                Revenue Generated
              </Typography>
              <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>
                $59,342.32
              </Typography>
            </Box>
            <IconButton 
              aria-label="Download revenue data"
              sx={{
                background: colors.blueAccent[700],
                '&:hover': {
                  background: colors.blueAccent[600],
                }
              }}
            >
              <DownloadOutlined sx={{ fontSize: '26px', color: colors.grey[100] }} />
            </IconButton>
          </Box>
          <Box height="250px" mt="10px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* Recent Transactions */}
        <Box
          gridColumn={isNonMobile ? "span 4" : "span 12"}
          gridRow="span 2"
          sx={{
            background: colors.primary[400],
            borderRadius: '12px',
            p: '20px',
            boxShadow: `0 4px 20px ${colors.primary[900]}30`,
            border: `1px solid ${colors.primary[300]}`,
            overflow: 'auto',
          }}
        >
          <Typography variant="h5" fontWeight="600" color={colors.grey[100]} mb="15px">
            Recent Transactions
          </Typography>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`2px solid ${colors.primary[500]}`}
              p="15px 0"
              sx={{
                transition: 'background 0.2s ease',
                '&:hover': {
                  background: colors.primary[300],
                  borderRadius: '4px',
                }
              }}
            >
              <Box>
                <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                sx={{
                  background: `linear-gradient(45deg, ${colors.greenAccent[600]}, ${colors.greenAccent[500]})`,
                  p: '5px 12px',
                  borderRadius: '20px',
                  fontWeight: '700',
                  boxShadow: `0 2px 8px ${colors.greenAccent[500]}40`
                }}
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Campaign Progress */}
        <Box
          gridColumn={isNonMobile ? "span 4" : "span 12"}
          gridRow="span 2"
          sx={{
            background: colors.primary[400],
            borderRadius: '12px',
            p: '30px',
            boxShadow: `0 4px 20px ${colors.primary[900]}30`,
            border: `1px solid ${colors.primary[300]}`,
          }}
        >
          <Typography variant="h5" fontWeight="600" mb="15px" color={colors.grey[100]}>
            Campaign
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center">
            <ProgressCircle size="125" />
            <Typography variant="h5" color={colors.greenAccent[500]} mt="15px" mb="5px" textAlign="center">
              $48,352 revenue generated
            </Typography>
            <Typography variant="body2" color={colors.grey[100]} textAlign="center" sx={{ opacity: 0.8 }}>
              Includes extra misc expenditures and costs
            </Typography>
          </Box>
        </Box>

        {/* Sales Quantity */}
        <Box
          gridColumn={isNonMobile ? "span 4" : "span 12"}
          gridRow="span 2"
          sx={{
            background: colors.primary[400],
            borderRadius: '12px',
            p: '30px',
            boxShadow: `0 4px 20px ${colors.primary[900]}30`,
            border: `1px solid ${colors.primary[300]}`,
          }}
        >
          <Typography variant="h5" fontWeight="600" mb="15px" color={colors.grey[100]}>
            Sales Quantity
          </Typography>
          <Box height="250px" mt={2}>
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        {/* Geography Traffic */}
        <Box
          gridColumn={isNonMobile ? "span 4" : "span 12"}
          gridRow="span 2"
          sx={{
            background: colors.primary[400],
            borderRadius: '12px',
            p: '30px',
            boxShadow: `0 4px 20px ${colors.primary[900]}30`,
            border: `1px solid ${colors.primary[300]}`,
          }}
        >
          <Typography variant="h5" fontWeight="600" mb="15px" color={colors.grey[100]}>
            Geography Based Traffic
          </Typography>
          <Box height="200px" mt={2}>
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}