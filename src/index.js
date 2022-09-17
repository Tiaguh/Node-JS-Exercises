import { promises as fs } from 'fs';

// Exercício 01 

async function getDataJson() {
    try {
        const data = JSON.parse(await fs.readFile('./src/estados-cidades-atividade.json'));

        // console.log(data);

        return data;

    } catch (error) {
        console.log('Houve algum erro na leitura dos dados: ', error);
    }
}

// Exercício 02

async function getStateName() {
    const data = await getDataJson();

    const allStates = data.map((states) => {
        return {
            name: states.nome
        }
    });

    console.log(`Estados Do Brasil: \n `);

    allStates.forEach(allStatesClean => {
        console.log(`${allStatesClean.name}`);
    });
}

// getStateName();

// Exercício 03

async function getStatesStartingWithA() {
    const data = await getDataJson();

    const allStates = data.map((states) => {
        return states.nome
    });

    const allStatesStartWithA = allStates.filter((states) => {
        return states.startsWith('A')
    });
    console.log(`Estados Do Brasil que começam com a Letra A: \n `);

    allStatesStartWithA.forEach((states => {
        console.log(states);
    }));

}

// getStatesStartingWithA();

// Exercício 04

async function getStateFewerLetters() {
    const data = await getDataJson();

    const allStates = data.map((states) => {
        return states.nome
    });

    const allStatesOrder = allStates.sort((state1, state2) => {
        return state1.length - state2.length
    });

    allStatesOrder.forEach(states => {
        console.log(states);
    });

}

// getStateFewerLetters();

// Exercício 05

async function citiesOfSaoPaulo() {
    const data = await getDataJson();

    const citiesOfSaoPaulo = data.filter((cities) => {
        return cities.nome === 'São Paulo'
    });

    const citiesOfSaoPauloClean = citiesOfSaoPaulo.map((city) => {
        return city.cidades
    });

    citiesOfSaoPauloClean[0].forEach((city) => {
        console.log(city)
    })

}

// citiesOfSaoPaulo();

// Exercicio 06

async function citiesOfMaranhao() {
    const data = await getDataJson();

    const Maranhao = data.filter((state) => {
        return state.nome === "Maranhão"
    });
    
    const cities = Maranhao[0].cidades
    
    const MaranhaoClean = cities.filter((city) => {
        return city.length > 6
    });

    MaranhaoClean.forEach((states => {
        console.log(states);
    }));
}

// citiesOfMaranhao();

// Exercicio 07 ..............





// O parâmetro 'states' diz ao método o que eu quero usar dentro do arquivo JSON.