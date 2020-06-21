import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Typography from "@material-ui/core/Typography";
import TableContainer from "@material-ui/core/TableContainer";
import React from "react";

export default class DinamicTable extends React.Component {
    calcSalario(){
        let datas = this.props.pontos;

    }
    renderRows(){
        let rows = [];
        this.props.pontos.forEach((value) => {
            rows.push(
                <TableRow key={value.id}>
                    <TableCell>{new Date(value.dataHora).toLocaleDateString()}</TableCell>
                    <TableCell align={"right"}>R$ 1850</TableCell>
                    <TableCell align={"right"}>
                        <Typography style={{
                            marginLeft: "3vw",
                            border: "1px solid black",
                            height: "20px",
                            width: "20px",
                            backgroundColor: "#0bfc03",
                            borderRadius: "50%"
                        }}/>
                    </TableCell>
                </TableRow>
            );
        });
        return rows;
    }

    render() {
        let rows = this.renderRows();
        return (
            <TableContainer component={Paper}>
                <Table size={"small"} aria-label={"simple table"}>
                    <TableHead>
                        <TableRow>
                            <TableCell>data</TableCell>
                            <TableCell>Salário</TableCell>
                            <TableCell>status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}