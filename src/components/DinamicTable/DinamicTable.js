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
    calcSalario() {
        let datas = this.props.pontos;
        let pontos = {};
        for (let i = 0; i < datas.length; i++) {
            let c = new Date(datas[i].dataHora).toLocaleDateString();
            pontos[c] = false;
        } // retorna datas unicas, retirando duplicatas
        let properties = Object.keys(pontos);
        let mes_ano = {};
        while (properties[0] != null) {
            let prop = properties.pop();
            let mes = prop.split("/")[1], ano = prop.split("/")[2];
            if (mes_ano[mes + "_" + ano] === undefined || mes_ano[mes + "_" + ano] === null) {
                mes_ano[mes + "_" + ano] = 1
            } else {
                mes_ano[mes + "_" + ano]++;
            }
        }
        return mes_ano;
    }

    renderRows() {
        let mes_ano = this.calcSalario();
        let rows = [];
        console.log(mes_ano);
        let properties = Object.keys(mes_ano);
        while (properties[0] != null) {
            let prop = properties.pop();
            let propDate = prop.replace("_", "/");
            let mes = prop.split("_")[0], ano = prop.split("_")[1];
            let mesAtual = new Date().getMonth()+1, anoAtual = new Date().getFullYear();
            let circleColor = "#0341fc";
            if((ano>anoAtual)||(mes>mesAtual)){
                circleColor = "#fc0303";
            }
            else{
                circleColor = "#0bfc03";
            }
            rows.push(
                <TableRow key={propDate}>
                    <TableCell>{propDate}</TableCell>
                    <TableCell align={"center"}>R$ {this.props.userData.valorHora * mes_ano[prop]}</TableCell>
                    <TableCell align={"right"}>
                        <Typography style={{
                            marginLeft: "3vw",
                            border: "1px solid black",
                            height: "20px",
                            width: "20px",
                            backgroundColor: circleColor,
                            borderRadius: "50%"
                        }}/>
                    </TableCell>
                </TableRow>
            );
        }






        // this.props.pontos.forEach((value) => {
        //     rows.push(
        //         <TableRow key={value.id}>
        //             <TableCell>{new Date(value.dataHora).toLocaleString()}</TableCell>
        //             <TableCell align={"center"}>R$ 1850</TableCell>
        //             <TableCell align={"right"}>
        //                 <Typography style={{
        //                     marginLeft: "3vw",
        //                     border: "1px solid black",
        //                     height: "20px",
        //                     width: "20px",
        //                     backgroundColor: "#0bfc03",
        //                     borderRadius: "50%"
        //                 }}/>
        //             </TableCell>
        //         </TableRow>
        //     );
        // });
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