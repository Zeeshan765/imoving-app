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

function createData(home, small, medium, large) {
  return { home, small, medium, large }
}

const rows = [
  createData(
    'Studio or small apartment',
    '2 helpers for 2 hours',
    '2 helpers for 2 hours',
    '2 helpers for 4 hours'
  ),
  createData(
    '2 - 3 bedroom apartment (800-1,200 sqft)',
    '2 helpers for 3 hours',
    '2 helpers for 2 hours',
    '2 helpers for 5 hours'
  ),
  createData(
    '2 - 3 bedroom house (1,000-1,500 sqft)',
    '3 helpers for 4 hours',
    '3 helpers for 3 hours',
    '3 helpers for 7 hours'
  ),
  createData(
    '3 - 4 bedroom house (1,500-2,000 sqft)',
    '4 helpers for 4 hours',
    '4 helpers for 3 hours',
    '4 helpers for 7-8 hours'
  ),
  createData(
    '4+ bedroom house (2,000-3,000 sqft)',
    '4 helpers for 5 hours',
    '4 helpers for 4 hours',
    '4 helpers for 8-10 hours'
  ),
  createData(
    'Large house or castle (3,000+ sqft)',
    '4+ helpers for 6+ hours',
    '4+ helpers for 4+ hours',
    '4+ helpers for 10+ hours'
  ),
]

function MoverTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Job Size</StyledTableCell>
            <StyledTableCell align='center'>No. of Helpers</StyledTableCell>
            <StyledTableCell align='center'>Unloading Only</StyledTableCell>
            <StyledTableCell align='center'>Load & Unload</StyledTableCell>
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
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MoverTable
