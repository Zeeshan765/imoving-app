import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#E3F6FE',
    color: theme.palette.common.black,
    fontSize: 20,
    fontWeight: 'bold',
    borderRight: '1px solid #ddd',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
    borderRight: '1px solid #ddd',
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    // backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
    borderRight: '1px solid #ddd',
  },
}))

function createData(home, small, medium, large, dish) {
  return { home, small, medium, large, dish }
}

const rows = [
  createData('Studio.', '$278 – $ 599', '2 helpers', '$95/hr', '2-4 hours'),
  createData('1 bedroom.', '$389 – $750', '2 helpers', '$95/hr', '3-6 hours'),
  createData(
    '2 bedrooms.',
    '$750 – $1900',
    '3 helpers',
    '$125/hr',
    '4-8 hours'
  ),
  createData('3 bedrooms', '$1250– $3500', '4 helpers', '$165hr', '6-12 hours'),
  createData(
    '4 bedrooms',
    '$1,400 – $5100',
    '4 helpers',
    '$165/hr',
    '8-14 hours'
  ),
  createData(
    '5 bedroom +',
    '$2500 – $8000',
    '5 helpers',
    '$200/hr',
    '10-16 hours'
  ),
]

function CostTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Home Size</StyledTableCell>
            <StyledTableCell align='center'>Average Price</StyledTableCell>
            <StyledTableCell align='center'>No. of Helpers</StyledTableCell>
            <StyledTableCell align='center'>Ave Cost / Hr</StyledTableCell>
            <StyledTableCell align='center'># Hours</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.home}>
              <StyledTableCell component='th' scope='row'>
                {row.home}
              </StyledTableCell>
              <StyledTableCell align='center'>{row.small}</StyledTableCell>
              <StyledTableCell align='center'>{row.medium}</StyledTableCell>
              <StyledTableCell align='center'>{row.large}</StyledTableCell>
              <StyledTableCell align='center'>{row.dish}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CostTable
