/**
 * Calcula o tempo estimado de leitura de um texto
 * @param {string} text - O texto para calcular o tempo de leitura
 * @param {Object} options - Opções de configuração
 * @param {number} options.wordsPerMinute - Palavras por minuto (padrão: 200)
 * @param {string} options.language - Idioma para formatação ('pt' ou 'en')
 * @returns {Object} Objeto com tempo de leitura e estatísticas
 */
function calculateReadingTime(text, options = {}) {
  const {
    wordsPerMinute = 200,
    language = 'pt'
  } = options;

  if (!text || typeof text !== 'string') {
    return {
      minutes: 0,
      words: 0,
      characters: 0,
      formattedTime: language === 'pt' ? '0 min de leitura' : '0 min read'
    };
  }

  // Remove markdown syntax e HTML tags
  const cleanText = text
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]*`/g, '') // Remove inline code
    .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
    .replace(/\[.*?\]\(.*?\)/g, '') // Remove links
    .replace(/#+ /g, '') // Remove headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/~~(.*?)~~/g, '$1') // Remove strikethrough
    .replace(/> /g, '') // Remove blockquotes
    .replace(/- /g, '') // Remove list items
    .replace(/\d+\. /g, '') // Remove numbered lists
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\n+/g, ' ') // Replace line breaks with spaces
    .trim();

  // Conta palavras (separadas por espaços, excluindo espaços vazios)
  const words = cleanText
    .split(/\s+/)
    .filter(word => word.length > 0);

  const wordCount = words.length;
  const characterCount = cleanText.length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);

  // Formatação do tempo
  let formattedTime;
  if (language === 'pt') {
    if (minutes === 1) {
      formattedTime = '1 min de leitura';
    } else {
      formattedTime = `${minutes} min de leitura`;
    }
  } else {
    if (minutes === 1) {
      formattedTime = '1 min read';
    } else {
      formattedTime = `${minutes} min read`;
    }
  }

  return {
    minutes,
    words: wordCount,
    characters: characterCount,
    formattedTime,
    estimatedSeconds: Math.ceil((wordCount / wordsPerMinute) * 60)
  };
}

// Função específica para markdown
function calculateMarkdownReadingTime(markdownText, options = {}) {
  return calculateReadingTime(markdownText, options);
}

// Função para usar com React (hook personalizado)
function useReadingTime(text, options = {}) {
  const [readingTime, setReadingTime] = React.useState(null);

  React.useEffect(() => {
    if (text) {
      const time = calculateReadingTime(text, options);
      setReadingTime(time);
    }
  }, [text, options.wordsPerMinute, options.language]);

  return readingTime;
}

export { 
  calculateReadingTime, 
  calculateMarkdownReadingTime, 
  useReadingTime 
};