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

function createData(home, small, medium, large, dish, wardrobe, picture) {
  return { home, small, medium, large, dish, wardrobe, picture }
}

const rows = [
  createData('Studio 1 bedroom apt.', 10, 14, 7, 4, 2, 5),
  createData('2 or 3 bedroom apt.', 15, 18, 11, 6, 4, 8),
  createData('2 bedroom home.', 22, 28, 17, 11, 6, 12),
  createData('3 bedroom home', 31, 40, 25, 13, 9, 16),
  createData('4 bedroom home', 42, 50, 34, 11, 18, 20),
  createData('5 bedroom', 54, 66, 42, 23, 14, 25),
]

function BoxTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Home/Apartment Size</StyledTableCell>
            <StyledTableCell align='center'>Small Box</StyledTableCell>
            <StyledTableCell align='center'>Medium Box</StyledTableCell>
            <StyledTableCell align='center'>Large Box</StyledTableCell>
            <StyledTableCell align='center'>Dish Box</StyledTableCell>
            <StyledTableCell align='center'>Wardrobe Box</StyledTableCell>
            <StyledTableCell align='center'>Picture Box</StyledTableCell>
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
              <StyledTableCell align='center'>{row.wardrobe}</StyledTableCell>
              <StyledTableCell align='center'>{row.picture}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BoxTable
