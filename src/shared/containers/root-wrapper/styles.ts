'use client';

import { styled } from '@mui/material/styles';

export const ContainerStyles = styled('div')(({ theme }) => ({
	minHeight: '100vh',
	background: theme.palette.background.paper,
	transition: 'background 0.3s ease',
	overflow: 'hidden'
}));
