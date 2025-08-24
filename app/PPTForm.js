import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Text, Button, Stack as MaterialStack } from '@react-native-material/core';
import usePPT from '../hooks/usePPT';

export default function PPTForm() {
  const {
    MOVES,
    playerScore,
    cpuScore,
    cpuMove,
    resultLabel,
    play,
    reset,
  } = usePPT();

  const MoveButton = ({ moveKey }) => (
    <TouchableOpacity style={styles.moveBtn} onPress={() => play(moveKey)}>
      <Image source={MOVES[moveKey].image} style={styles.moveImg} />
    </TouchableOpacity>
  );

  return (
    <MaterialStack fill style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text variant="h6" style={styles.title}>Piedra, Papel, Tijeras</Text>
      </View>

      <View style={styles.scoreRow}>
        <View style={styles.scoreBox}>
          <Text style={styles.scoreLabel}>Jugador</Text>
          <Text style={styles.scoreValue}>{playerScore}</Text>
        </View>
        <View style={styles.scoreBox}>
          <Text style={styles.scoreLabel}>Computadora</Text>
          <Text style={styles.scoreValue}>{cpuScore}</Text>
        </View>
      </View>

      <View style={styles.movesRow}>
        <MoveButton moveKey="ROCK" />
        <MoveButton moveKey="PAPER" />
        <MoveButton moveKey="SCISSORS" />
      </View>

      <View style={styles.bottomArea}>
        <Button title={resultLabel} style={styles.resultBtn} variant="outlined" />
        <Button title="REINICIAR" style={styles.resetBtn} onPress={reset} />
      </View>
    </MaterialStack>
  );
}

const CARD_BG = '#D9D9D9';

const styles = StyleSheet.create({
  header: { marginTop: 8, alignItems: 'center' },
  title: { fontWeight: 'bold', fontSize: 22, marginVertical: 8 },
  scoreRow: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 },
  scoreBox: { alignItems: 'center' },
  scoreLabel: { color: '#666' },
  scoreValue: { fontSize: 28, color: '#000' },
  centerCard: {
    marginTop: 24,
    alignSelf: 'center',
    width: 200,
    height: 120,
    backgroundColor: CARD_BG,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerImg: { width: 80, height: 80, resizeMode: 'contain' },
  movesRow: { marginTop: 18, flexDirection: 'row', justifyContent: 'space-around' },
  moveBtn: {
    width: 90,
    height: 90,
    backgroundColor: CARD_BG,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moveImg: { width: 60, height: 60, resizeMode: 'contain' },
  bottomArea: { marginTop: 22, alignItems: 'center', gap: 12 },
  resultBtn: { width: 220, borderRadius: 24 },
  resetBtn: { width: 160, borderRadius: 12 },
});
