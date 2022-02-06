import { Database } from './Database';
import '@testing-library/jest-dom';

var db;

beforeEach(() => {
  db = new Database();
});

it('exist', () => {
	expect(db).toBeTruthy();
});

it('creates a existing card from the database', () => {
  expect(db.getCard('test-001')).toBeTruthy();
});

it('fails creating a non existing card from the database', () => {
  expect(db.getCard('test-non-existing')).toBeFalsy();
});