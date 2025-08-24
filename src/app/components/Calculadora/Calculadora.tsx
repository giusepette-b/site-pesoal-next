'use client'

import { useState, useEffect } from 'react'
import './Calculadora.css'

interface CalculatorState {
  displayValue: string
  firstOperand: number | null
  waitingForSecondOperand: boolean
  operator: string | null
}

const Calculator = () => {
  const [calculator, setCalculator] = useState<CalculatorState>({
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  })

  // Atualiza o display da calculadora
  const updateDisplay = () => {
    const screen = document.querySelector('.calculator-screen') as HTMLInputElement
    if (screen) {
      screen.value = calculator.displayValue
    }
  }

  // Funções para manipular os inputs
  const inputDigit = (digit: string) => {
    const { displayValue, waitingForSecondOperand } = calculator
    
    if (waitingForSecondOperand) {
      setCalculator(prev => ({
        ...prev,
        displayValue: digit,
        waitingForSecondOperand: false
      }))
    } else {
      setCalculator(prev => ({
        ...prev,
        displayValue: displayValue === '0' ? digit : displayValue + digit
      }))
    }
  }

  // Função para lidar com o ponto decimal
  const inputDecimal = (dot: string) => {
    if (calculator.waitingForSecondOperand) {
      setCalculator(prev => ({
        ...prev,
        displayValue: '0.',
        waitingForSecondOperand: false
      }))
      return
    }

    if (!calculator.displayValue.includes(dot)) {
      setCalculator(prev => ({
        ...prev,
        displayValue: prev.displayValue + dot
      }))
    }
  }

  // Função para lidar com operadores
  const handleOperator = (nextOperator: string) => {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue)

    if (operator && calculator.waitingForSecondOperand) {
      setCalculator(prev => ({
        ...prev,
        operator: nextOperator
      }))
      return
    }

    if (firstOperand === null) {
      setCalculator(prev => ({
        ...prev,
        firstOperand: inputValue,
        waitingForSecondOperand: true,
        operator: nextOperator
      }))
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator)
      
      setCalculator(prev => ({
        ...prev,
        displayValue: `${parseFloat(result.toFixed(7))}`,
        firstOperand: result,
        waitingForSecondOperand: true,
        operator: nextOperator
      }))
    }
  }

  // Função de cálculo
  const calculate = (firstOperand: number, secondOperand: number, operator: string): number => {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand
      case '-':
        return firstOperand - secondOperand
      case '*':
        return firstOperand * secondOperand
      case '/':
        return firstOperand / secondOperand
      default:
        return secondOperand
    }
  }

  // Função para resetar a calculadora
  const resetCalculator = () => {
    setCalculator({
      displayValue: '0',
      firstOperand: null,
      waitingForSecondOperand: false,
      operator: null,
    })
  }

  // Atualiza o display quando o estado muda
  useEffect(() => {
    updateDisplay()
  }, [calculator.displayValue])

  // Manipulador de clique nos botões
  const handleButtonClick = (value: string, type: string) => {
    switch (type) {
      case 'operator':
        handleOperator(value)
        break
      case 'decimal':
        inputDecimal(value)
        break
      case 'all-clear':
        resetCalculator()
        break
      case 'equal-sign':
        if (calculator.operator) {
          handleOperator(value)
        }
        break
      default:
        inputDigit(value)
        break
    }
  }

  return (
    <div className="calculator-container">
      <h2 className="calculator-title">Calculadora</h2>
      <div className="calculator">
        <input 
          type="text" 
          className="calculator-screen" 
          value={calculator.displayValue} 
          disabled 
        />
        
        <div className="calculator-keys">
          <button 
            type="button" 
            className="operator" 
            value="+"
            onClick={() => handleButtonClick('+', 'operator')}
          >+</button>
          <button 
            type="button" 
            className="operator" 
            value="-"
            onClick={() => handleButtonClick('-', 'operator')}
          >-</button>
          <button 
            type="button" 
            className="operator" 
            value="*"
            onClick={() => handleButtonClick('*', 'operator')}
          >&times;</button>
          <button 
            type="button" 
            className="operator" 
            value="/"
            onClick={() => handleButtonClick('/', 'operator')}
          >&divide;</button>
          
          <button 
            type="button" 
            value="7"
            onClick={() => handleButtonClick('7', 'digit')}
          >7</button>
          <button 
            type="button" 
            value="8"
            onClick={() => handleButtonClick('8', 'digit')}
          >8</button>
          <button 
            type="button" 
            value="9"
            onClick={() => handleButtonClick('9', 'digit')}
          >9</button>
          
          <button 
            type="button" 
            value="4"
            onClick={() => handleButtonClick('4', 'digit')}
          >4</button>
          <button 
            type="button" 
            value="5"
            onClick={() => handleButtonClick('5', 'digit')}
          >5</button>
          <button 
            type="button" 
            value="6"
            onClick={() => handleButtonClick('6', 'digit')}
          >6</button>
          
          <button 
            type="button" 
            value="1"
            onClick={() => handleButtonClick('1', 'digit')}
          >1</button>
          <button 
            type="button" 
            value="2"
            onClick={() => handleButtonClick('2', 'digit')}
          >2</button>
          <button 
            type="button" 
            value="3"
            onClick={() => handleButtonClick('3', 'digit')}
          >3</button>
          
          <button 
            type="button" 
            value="0"
            onClick={() => handleButtonClick('0', 'digit')}
          >0</button>
          <button 
            type="button" 
            className="decimal" 
            value="."
            onClick={() => handleButtonClick('.', 'decimal')}
          >.</button>
          <button 
            type="button" 
            className="all-clear" 
            value="all-clear"
            onClick={() => handleButtonClick('all-clear', 'all-clear')}
          >AC</button>
          
          <button 
            type="button" 
            className="equal-sign" 
            value="="
            onClick={() => handleButtonClick('=', 'equal-sign')}
          >=</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator