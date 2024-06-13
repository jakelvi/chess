import { Piece } from './pieces/piece';

export enum Color {
  White,
  Black,
}

export type Coords = {
  x: number;
  y: number;
};

export enum FENChar {
  WhitePawn = 'P',
  WhiteKnight = 'N',
  WhiteBishop = 'B',
  WhiteRook = 'R',
  WhiteQueen = 'Q',
  WhiteKing = 'K',
  BlackPawn = 'p',
  BlackKnight = 'n',
  BlackBishop = 'b',
  BlackRook = 'r',
  BlackQueen = 'q',
  BlackKing = 'k',
}

export const pieceImagePaths: Readonly<Record<FENChar, string>> = {
  [FENChar.WhitePawn]: 'assets/pieces/white_pawn.svg',
  [FENChar.WhiteKnight]: 'assets/pieces/white_knight.svg',
  [FENChar.WhiteBishop]: 'assets/pieces/white_bishop.svg',
  [FENChar.WhiteRook]: 'assets/pieces/white_rook.svg',
  [FENChar.WhiteQueen]: 'assets/pieces/white_queen.svg',
  [FENChar.WhiteKing]: 'assets/pieces/white_king.svg',
  [FENChar.BlackPawn]: 'assets/pieces/black_pawn.svg',
  [FENChar.BlackKnight]: 'assets/pieces/black_knight.svg',
  [FENChar.BlackBishop]: 'assets/pieces/black_bishop.svg',
  [FENChar.BlackRook]: 'assets/pieces/black_rook.svg',
  [FENChar.BlackQueen]: 'assets/pieces/black_queen.svg',
  [FENChar.BlackKing]: 'assets/pieces/black_king.svg',
};

export type SafeSquares = Map<string, Coords[]>;

export enum MoveType {
  Capture,
  Castling,
  Promotion,
  Check,
  CheckMate,
  BasicMove,
}

export type LastMove = {
  piece: Piece;
  prevX: number;
  prevY: number;
  currentX: number;
  currentY: number;
  moveType: Set<MoveType>;
};

type KingChecked = {
  isInCheck: true;
  x: number;
  y: number;
};

type KingNotChecked = {
  isInCheck: false;
};

export type CheckState = KingChecked | KingNotChecked;

export type MoveList = [string, string?][];

export type GameHistory = {
  lastMove: LastMove | undefined;
  checkState: CheckState;
  board: (FENChar | null)[][];
}[];
